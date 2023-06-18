CREATE TABLE item (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO item (title) VALUES ('Stuff'), ('Doodads');

CREATE TABLE user (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  nickname varchar(255) NOT NULL REQUIRED,
  email varchar(255) NOT NULL REQUIRED,
  passwrd varchar(255) NOT NULL REQUIRED,
  avatar_url varchar(255),
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE message (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  message_date datetime NOT NULL REQUIRED,
  message_text varchar(255) NOT NULL REQUIRED,
  author_id int(11),
  FOREIGN KEY(author_id) REFERENCES user(id)
 ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

