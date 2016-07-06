# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160706173845) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "followings", force: :cascade do |t|
    t.integer  "following_id", null: false
    t.integer  "follower_id",  null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "followings", ["follower_id"], name: "index_followings_on_follower_id", using: :btree
  add_index "followings", ["following_id", "follower_id"], name: "index_followings_on_following_id_and_follower_id", unique: true, using: :btree
  add_index "followings", ["following_id"], name: "index_followings_on_following_id", using: :btree

  create_table "rides", force: :cascade do |t|
    t.integer  "user_id",          null: false
    t.text     "ride_path",        null: false
    t.string   "ride_name",        null: false
    t.integer  "elevation_gain",   null: false
    t.float    "distance",         null: false
    t.text     "ride_description"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
    t.integer  "duration"
    t.integer  "calories_burned"
    t.string   "start_pos"
    t.string   "rider"
  end

  add_index "rides", ["user_id"], name: "index_rides_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", using: :btree

end
