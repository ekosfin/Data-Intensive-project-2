param adminUser string
#disable-next-line secure-secrets-in-params //This being a small demo we are fine with password being visible
param adminPassword string
param location1 string = 'swedencentral'
param location2 string = 'northeurope'
param location3 string = 'germanywestcentral'
param namePrefix string = 'data-intensive-proj'

// Create postgres servers
resource postgresServer1 'Microsoft.DBforPostgreSQL/flexibleServers@2024-08-01' = {
  name: '${namePrefix}-sweden-db'
  location: location1
  sku: {
    name: 'Standard_B1ms'
    tier: 'Burstable'
  }
  properties: {
    administratorLogin: adminUser
    administratorLoginPassword: adminPassword
    version: '16'
    storage: {
      tier: 'P4'
      storageSizeGB: 32
      autoGrow: 'Disabled'
    }
  }
}

resource postgresServer2 'Microsoft.DBforPostgreSQL/flexibleServers@2024-08-01' = {
  name: '${namePrefix}-ireland-db'
  location: location2
  sku: {
    name: 'Standard_B1ms'
    tier: 'Burstable'
  }
  properties: {
    administratorLogin: adminUser
    administratorLoginPassword: adminPassword
    version: '16'
    storage: {
      tier: 'P4'
      storageSizeGB: 32
      autoGrow: 'Disabled'
    }
  }
}

resource postgresServer3 'Microsoft.DBforPostgreSQL/flexibleServers@2024-08-01' = {
  name: '${namePrefix}-germany-db'
  location: location3
  sku: {
    name: 'Standard_B1ms'
    tier: 'Burstable'
  }
  properties: {
    administratorLogin: adminUser
    administratorLoginPassword: adminPassword
    version: '16'
    storage: {
      tier: 'P4'
      storageSizeGB: 32
      autoGrow: 'Disabled'
    }
  }
}

// Create a databases for the server
resource db1 'Microsoft.DBforPostgreSQL/flexibleServers/databases@2024-08-01' = {
  parent: postgresServer1
  name: 'db1swedencentral'
}

resource db2 'Microsoft.DBforPostgreSQL/flexibleServers/databases@2024-08-01' = {
  parent: postgresServer2
  name: 'db2northeurope'
}

resource db3 'Microsoft.DBforPostgreSQL/flexibleServers/databases@2024-08-01' = {
  parent: postgresServer3
  name: 'db3germanywestcentral'
}

// Allow all IPs to connect to DBs, not smart for production
resource firewall1 'Microsoft.DBforPostgreSQL/flexibleServers/firewallRules@2024-08-01' = {
  name: '${postgresServer1.name}-allow-all'
  parent: postgresServer1
  properties: {
    startIpAddress: '0.0.0.0'
    endIpAddress: '255.255.255.255'
  }
}

resource firewall2 'Microsoft.DBforPostgreSQL/flexibleServers/firewallRules@2024-08-01' = {
  name: '${postgresServer2.name}-allow-all'
  parent: postgresServer2
  properties: {
    startIpAddress: '0.0.0.0'
    endIpAddress: '255.255.255.255'
  }
}

resource firewall3 'Microsoft.DBforPostgreSQL/flexibleServers/firewallRules@2024-08-01' = {
  name: '${postgresServer3.name}-allow-all'
  parent: postgresServer3
  properties: {
    startIpAddress: '0.0.0.0'
    endIpAddress: '255.255.255.255'
  }
}

// Output connection strings for each server
output connectionString1 string = 'Host=${postgresServer1.name}.postgres.database.azure.com;Port=5432;Username=${adminUser}@${postgresServer1.name};Password=${adminPassword};Database=db1swedencentral;SslMode=Require'
output connectionString2 string = 'Host=${postgresServer2.name}.postgres.database.azure.com;Port=5432;Username=${adminUser}@${postgresServer2.name};Password=${adminPassword};Database=db2northeurope;SslMode=Require'
output connectionString3 string = 'Host=${postgresServer3.name}.postgres.database.azure.com;Port=5432;Username=${adminUser}@${postgresServer3.name};Password=${adminPassword};Database=db3germanywestcentral;SslMode=Require'

// Output for db names
output postgresServer1name string = postgresServer1.name
output postgresServer2name string = postgresServer2.name
output postgresServer3name string = postgresServer3.name

output db1name string = db1.name
output db2name string = db2.name
output db3name string = db3.name
