class CreateMeetings < ActiveRecord::Migration[5.2]
  def change
    create_table :meetings do |t|
      t.string :name
      t.date :time
      t.integer :duration
      t.integer :price

      t.timestamps
    end
  end
end
