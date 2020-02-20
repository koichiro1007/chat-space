## groups_usersテーブル (中間テーブル)

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user



## usersテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true|
|name|string|null: false, unique: true|
|email|string|null: false, unique: true|
|password|string|null: false|

### Association
- has_many :groups, through: :groups_users
- has_many :groups_users
- has_many :messages



## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true|
|name|string|null: false, unique: true|

### Association
- has_many :users, through: :groups_users
- has_many :groups_users
- has_many :messages




## messageテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|sting|null: false|
|group_id|sting|null: false|
|image|text||
|text|text||

### Association
- belongs_to :user
- belongs_to :group
