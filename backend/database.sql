CREATE TABLE user (
  
  'id' int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  'nickname' varchar(255) NOT NULL,
  'email' varchar(255) NOT NULL,
  'passwrd' varchar(255) NOT NULL,
  'avatar_url' varchar(255),

) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE message (

  'id' int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  'message_date' datetime NOT NULL,
  'message_text' TEXT NOT NULL,
  'user_id' int(11),
  FOREIGN KEY(user_id) REFERENCES user(id)

 ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

