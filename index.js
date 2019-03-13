#! /usr/bin/env node

const carlo = require('carlo')

async function main() {
  const app = await carlo.launch()

  app.on('exit', () => process.exit())

  await app.load('https://play.google.com/music/listen')
}

main().catch(err => console.error(err))

