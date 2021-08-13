USE portfolio;

ALTER TABLE cash_accounts ADD COLUMN acct_type VARCHAR(100) NOT NULL AFTER routing_number;
ALTER TABLE investment_accounts ADD COLUMN acct_type VARCHAR(100) NOT NULL AFTER routing_number;

ALTER TABLE cash_accounts MODIFY acct_number VARCHAR(12);
ALTER TABLE cash_accounts MODIFY routing_number VARCHAR(10);
ALTER TABLE investment_accounts MODIFY acct_number VARCHAR(12) NOT NULL;
ALTER TABLE investment_accounts MODIFY routing_number VARCHAR(10) NOT NULL;

SHOW FIELDS from portfolio.investment_accounts;
SHOW FIELDS from portfolio.cash_accounts;

INSERT INTO cash_accounts
VALUES 
("123456789876","1234567891","Checking","Citibank",2134.33,'2021-08-12 06:42:00'),
("1927583671","98374653","Cash Management","Fidelity Cash",3849.23,'2021-08-12 12:42:00'),
("029384736572","98726354","Savings","Citibank",21456.77,'2021-08-12 03:42:00');

INSERT INTO investment_accounts
VALUES 
("243484867051","71485340","Jesse Pinkman 401k","Citibank",31599.33,'2021-08-12 06:42:00'),
("989742139534","62895344","TD Ameritrade Brokerage","TD Ameritrade",76169.17,'2021-08-12 12:42:00'),
("197905453456","51248664","IRA 1","Citibank",35299.71,'2021-08-12 03:42:00'),
("226199298849","36710807","Roth IRA 2","Deutsche Bank",78633.51,'2021-08-12 06:42:00'),
("622031227820","73435676","Taxable","TD Bank",75012.21,'2021-08-12 12:42:00'),
("350906993788","95226224","Lebron James 401k","Citibank",29133.38,'2021-08-12 03:42:00'),
("949893871408","95837001","tile","Stock Options - tile",85892.23,'2021-08-12 06:42:00'),
("544241368491","66774172","GameStop","Stock Options - GameStop",46704.23,'2021-08-12 12:42:00'),
("048848783466","56317148","Taxable","Deutsche Bank",38873.54,'2021-08-12 03:42:00');



