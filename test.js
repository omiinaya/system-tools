const sys = require('./index')

console.log(sys.get.MBName())
console.log(sys.get.MBRevision())
console.log(sys.get.MBSerial())
console.log(sys.get.User())
console.log(sys.get.PCName())
console.log(sys.get.GPUName())
console.log(sys.get.PowerScheme())
console.log(sys.get.MemSize())
console.log(sys.get.MemSpeed())
console.log(sys.get.ScreenResolution())
console.log(sys.get.PowerScheme())
//console.log(sys.core.findProcessByTitle('Task Manager'))
//console.log(sys.core.findProcessByTitle('XD'))
//console.log(sys.core.findProcessByPiD('13640'))
//sys.core.regList('HKLM\\SYSTEM\\CurrentControlSet\\Control\\Keyboard Layout')
//sys.set.UAC('off')
//sys.set.Hibernation('off')
//sys.set.Location('off')
//sys.set.Microphone('off')
//sys.set.Webcam('off')
//sys.core.regPut('HKLM\\SYSTEM\\CurrentControlSet\\Control\\Keyboard Layout', 'test entry', 'test', 'REG_SZ')
//sys.core.regAdd()
//sys.core.killProcessByName('Notepad.exe')
//sys.run.restartSystem()
//sys.run.logoutSystem()
//sys.run.formatDrive('D', false)
//sys.set.PowerPlan('High')
//sys.run.registerPowerPlan('Low')
//sys.run.registerPowerPlan('High')
//sys.run.registerPowerPlan('Ultimate')
//sys.run.clearLogs()
//sys.run.diskCleanUp()
//sys.run.toggleAdministrator()
//sys.run.changeUserPassword('test123')
sys.set.UAC()