const argv = process.argv
const shell = require('shelljs')

shell.echo(`${argv}`)
if (!argv || argv.length > 3) {
  shell.echo('请正确输入的描述信息')
  return
}

shell.exec('node scripts/build.js')
shell.exec('git add .')
shell.exec(`git commit -m "${argv[2]}"`)
shell.exec('git push')

