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
|account_name|string|null: false, unique: true|
|email|string|null: false, unique: true|
|password|string|null: false|

### Association
- has_many :groups, through: :groups_users
- has_many :messages



## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true|
|group_name|string|null: false, unique: true|
|member|integer|null: false|

### Association
- has_many :users, through: :groups_users
- has_many :messages




## messageテーブル

|Column|Type|Options|
|------|----|-------|
|message_id|integer|null: false|
|image|string|null: false|
|text|text|null: false|

### Association
- belongs_to :user
- belongs_to :group
