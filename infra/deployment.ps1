# Note: you need to be logged in via az login before using this script
$rgName="data-intensive-dbs"
$templateFile = ".\deploy_dbs.bicep"
$location="swedencentral"
$adminUser="ekos"
$adminPassword="SuperSecret" # change me if you actually deploy

# Create resource group where bicep resources are going to be deployed
Write-Host "Creating/Updating resource group $rgName..."
az group create --name $rgName --location $location
# Deploy bicep file resources
Write-Host "Starting Database creation..."
$deploymentResult = az deployment group create `
  --resource-group $rgName `
  --template-file $templateFile `
  --mode Complete `
  -p adminUser=$adminUser `
  -p adminPassword=$adminPassword `
  --query properties.outputs `
  --output json | ConvertFrom-Json

Write-Host "Database creation done."
Write-Host $deploymentResult
# Retrieve server details from outputs
$server1 = $deploymentResult.postgresServer1name.value
$server2 = $deploymentResult.postgresServer2name.value
$server3 = $deploymentResult.postgresServer3name.value

$dbName1 = $deploymentResult.db1name.value
$dbName2 = $deploymentResult.db2name.value
$dbName3 = $deploymentResult.db3name.value

# Execute SQL file on each server
Write-Host "Executing SQL file on $server1..."
az postgres flexible-server execute `
  --name $server1 `
  --database-name $dbName1 `
  --admin-user $adminUser `
  --admin-password $adminPassword `
  --file-path "init1.sql"

# Execute SQL file on each server
Write-Host "Executing SQL file on $server2..."
az postgres flexible-server execute `
  --name $server2 `
  --database-name $dbName2 `
  --admin-user $adminUser `
  --admin-password $adminPassword `
  --file-path "init2.sql"

# Execute SQL file on each server
Write-Host "Executing SQL file on $server3..."
az postgres flexible-server execute `
  --name $server3 `
  --database-name $dbName3 `
  --admin-user $adminUser `
  --admin-password $adminPassword `
  --file-path "init3.sql"