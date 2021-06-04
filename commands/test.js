const Canvas = require('canvas')
const { MessageAttachment } = require('discord.js')
const path = require('path')

module.exports = {
    name: 'test',
    description: "this is a ping command!",
    execute(message, args){
    console.log("this worked")
    const canvas = Canvas.createCanvas(700, 250)
    const ctx = canvas.getContext('2d')

    ctx.fillStyle = '#ffffff' // White text
    ctx.font = '35px sans-serif'
    let text = "Welcome!"
    x = canvas.width / 2 - ctx.measureText(text).width / 2
    ctx.fillText(text, x, 60)

    ctx.font = '30px'
    text = `Member`
    x = canvas.width / 2 - ctx.measureText(text).width / 2
    ctx.fillText(text, x, 100)

    const attachment = new MessageAttachment(canvas.toBuffer())
    message.channel.send('', attachment)
    }
}