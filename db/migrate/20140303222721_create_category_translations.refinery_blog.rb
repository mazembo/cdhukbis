# This migration comes from refinery_blog (originally 20120601151114)
class CreateCategoryTranslations < ActiveRecord::Migration
  def up
    Refinery::Blog::Category.create_translation_table!({
      :title => :string,
      :slug => :string
    }, {
      :migrate_data => true
    })
  end

  def down
    Refinery::Blog::Category.drop_translation_table! :migrate_data => true
  end
end
