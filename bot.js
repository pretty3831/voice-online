const Eris = require("eris");
var client = new Eris("NTI0Nzg4NTkwNjY5MjAxNDE4.DyoIVg.Xj4G2kzu6PZ1wQyVg031wMpO1lU");
var client_id = "536212517748211723";
                    var i = "0";
                    var x = "0";
client.on("voiceChannelJoin", (msg) => {
    x++;
    client.editChannel(client_id, { name : "Voice Online : " + x + ""});
});
client.on("voiceChannelLeave", (msg) => {
    x--;
    client.editChannel(client_id, { name : "Voice Online : " + x + ""});
});

client.on("messageCreate", (msg) => {
    if(msg.author.id !== "433198762706599936") return client.createMessage('__**This Command is only for the bot Owner**__');
    if(msg.content === "rvoice") {
        let users = msg.channel.guild.members.map(m => m.user.id);
        let messages = [];
        messages.push(users);
        setTimeout(function(){
        while (i <= messages[0].length - 1) {
            check = msg.channel.guild.members.get(messages[0][i]);
        if(!check.voiceState.channelID){
                i++;
        }else{
                x++;
                i++;
        }
}
    console.log(x);
    client.createMessage(msg.channel.id, "Voice Online Members Now Are: **"+x+"** Members!");
    client.editChannel(client_id, { name : "Voice Online : "+x+""});
    messages = [];
}, 1);
    }
});


  

client.connect("NTI0Nzg4NTkwNjY5MjAxNDE4.DyocNA.k2EqbS2s5aXWtzqmoxDYWix_WpE")
