# Setup with Azure Pipelines
For 


# Azure B2C Setup and Issues
Because Azure B2C is being used and deficencies with the way azure tenants need to be setup the 
terraform has manual steps and requires it to be run once.  Then some manual setup in the tenant for
a service principal to authenticate with.  Then run again to finish the tenant application setup.

### Step 1 (first run - no tenant created yet)
If the environment b2c tenant has not been created then make sure the $/terraform/environment_vars/\<env>.tfvars files need to have the following variables set to empty strings.  Also note that the `azuread_use_oidc` variable should be set to `false`

``` text
b2c_tenant_id				= ""
b2c_tenant_domain_name			= ""
terraform_app_client_id			= ""
terraform_app_client_secret		= ""
azuread_use_oidc			= false
```

Then run the terraform so that the resources (including the b2c resource) are created.


### Step 2 (create an app registration in the new tenant so terraform can authenticate to the tenant)
Terraform will need to authenticate to the tenant using the `azuread` provider. To do this an app registration needs to be setup and the $/terraform/main.tf file needs to be updated with the authentication information.

1. Create the app registration in the new tenant. (name: Terraform Deploy Application)
	- Use `Accounts in this organizational directory only`	
	- Use `Allow public client flows`
2. Create a service principal for the app by clicking 'Create Service Principal' from the overview page.
3. Create a secret in the app registration (name: Terraform Deploy Secret)
4. Set the following api permissions
	- `Azure Active Directory Graph`
		- Application.ReadWrite.All (Application)
		- Application.ReadWrite.OwnedBy (Application)
		- Directory.Read.All (Application)
	- `Microsoft.Graph`
		- Application.ReadWrite.All (Application)
		- Application.ReadWrite.OwnedBy (Application)
		- AppRoleAssignment.ReadWrite.All (Application)
		- Directory.Read.All (Application)
		- Directory.ReadWrite.All (Application)
		- Group.ReadWrite.All (Application)
		- GroupMember.ReadWrite.All (Application)
		- offline_access (Delegated)
		- openid (Delegated)
5. Update the $/terraform/main.tf file and uncomment the `azuread` provider

### Step 3 (update the tenant and terraform app environment variables)
Update all the $/terraform/environment_vars/\<env>.tfvars files with the values from the newly setup environment tenant from the first run of terraform.  Also, make sure to set the `azuread_use_oidc` variable to `true`.

``` text
b2c_tenant_id				= "d96c6cca-626a-49e7-98c8-fcc2f7220123"
b2c_tenant_domain_name			= "devvecdrinks.onmicrosoft.com"
terraform_app_client_id			= "2957a4f0-bd36-4a35-90a1-96322a5eb321"
terraform_app_client_secret		= "~F48Q~cdMjE-rhsA6d_5fHD-SifIQrFNA2t4ma.H"
azuread_use_oidc			= true
```

### Step 4 (run terraform)
Run terraform and if all goes well terraform will successfully authenticate to the azure b2c tenant and finish the rest of the setup.