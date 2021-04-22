const allowed = ["805876655322169434", "696503154547884103"];

module.exports = {
  name: "eval",
  description: "eeeee",
  execute(message, args, Discord, client) {
    allowed.forEach(ID => {
      if (message.author.id === ID) {
        try {
          eval(args.join(" "));
        } catch (err) {
          message.channel.send(err.name + ": " + err.message);
        }
      }
    });
  }
};
