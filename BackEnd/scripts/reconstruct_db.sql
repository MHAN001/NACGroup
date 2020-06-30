DROP TABLE IF EXISTS activity;
DROP TABLE IF EXISTS activity_type;
DROP TABLE IF EXISTS available_dates;
DROP TABLE IF EXISTS contact_type;
DROP TABLE IF EXISTS hibernate_sequence;
DROP TABLE IF EXISTS location;

CREATE TABLE activity(
    activity_id BIGINT NOT NULL,
    activity_contact VARCHAR(255),
    activity_name VARCHAR(255),
    description VARCHAR(255),
    activity_type_id BIGINT,
    contact_type_id BIGINT,
    location_id BIGINT,
    PRIMARY KEY ( activity_id )
);
CREATE INDEX activity_type_index ON activity (activity_type_id);
CREATE INDEX location_id_index ON activity (location_id);
CREATE INDEX location_activity_type_index ON activity (activity_type_id, location_id);

CREATE TABLE activity_type (
    id BIGINT NOT NULL,
    activity_type_name VARCHAR(255),
    PRIMARY KEY (id)
);
CREATE INDEX activity_type_index ON activity_type (activity_type_name);

CREATE TABLE available_dates (
    id BIGINT NOT NULL,
    activity_id BIGINT NOT NULL,
    available_dates DATETIME(6),
    PRIMARY KEY (id)
);
CREATE INDEX activity_id_index ON available_dates (activity_id);
CREATE INDEX available_date_index ON available_dates (available_dates);

CREATE TABLE contact_type (
    id BIGINT NOT NULL,
    contact_type_name VARCHAR(255),
    PRIMARY KEY (id)
);
CREATE INDEX contact_type_index ON contact_type (contact_type_name);

CREATE TABLE location (
    id BIGINT NOT NULL,
    location_name VARCHAR(255),
    PRIMARY KEY (id)
);
CREATE INDEX location_index ON location (location_name);