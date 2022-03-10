import { stdin, stdout } from './process'

function init() {
  stdin.setRawMode(true)

  stdout.cursorTo(0, 0)
  stdout.clearScreenDown()
}

init()

stdin.on('data', (input: Buffer) => {
  if (input[0] === 'q'.charCodeAt(0)) {
    setTimeout(() => {
      process.exit(0)
      // run this in 200ms to let logs finish
      // otherwise the rest of the stuff can't stop
      // wondering if there's a better mecanism, like checking if reader of stdout is done
    }, 200)
  }
})
