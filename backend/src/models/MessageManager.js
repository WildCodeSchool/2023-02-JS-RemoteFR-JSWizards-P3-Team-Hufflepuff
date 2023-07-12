const AbstractManager = require("./AbstractManager");

class MessageManager extends AbstractManager {
  constructor() {
    super({ table: "message" });
  }

  insert(message) {
    return this.database.query(
      `insert into ${this.table} (message_date, message_text,user_id) values (?,?,?)`,
      [message.message_date, message.message_text, message.user_id]
    );
  }

  update(item) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [item.title, item.id]
    );
  }
}

module.exports = MessageManager;
