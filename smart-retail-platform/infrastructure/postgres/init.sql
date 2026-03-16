CREATE TABLE users (

 id SERIAL PRIMARY KEY,
 email TEXT UNIQUE NOT NULL,
 password TEXT NOT NULL,
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);

CREATE TABLE products (

 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 price NUMERIC NOT NULL,
 stock INT DEFAULT 0,
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);

CREATE TABLE orders (

 id SERIAL PRIMARY KEY,
 user_id INT,
 total NUMERIC,
 status TEXT DEFAULT 'pending',
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

 CONSTRAINT fk_user
 FOREIGN KEY(user_id)
 REFERENCES users(id)
 ON DELETE CASCADE

);

CREATE TABLE order_items (

 id SERIAL PRIMARY KEY,
 order_id INT,
 product_id INT,
 quantity INT,
 price NUMERIC,

 CONSTRAINT fk_order
 FOREIGN KEY(order_id)
 REFERENCES orders(id)
 ON DELETE CASCADE,

 CONSTRAINT fk_product
 FOREIGN KEY(product_id)
 REFERENCES products(id)
 ON DELETE CASCADE

);

CREATE TABLE inventory (

 id SERIAL PRIMARY KEY,
 product_id INT UNIQUE,
 quantity INT,

 CONSTRAINT fk_product_inventory
 FOREIGN KEY(product_id)
 REFERENCES products(id)
 ON DELETE CASCADE

);