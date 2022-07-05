# React Review

## Resources
    - Code Repo: https://github.com/idbentley/lighthouse-lectures/tree/main/flex-w24d1-react-review
    - Video: https://vimeo.com/727144574/41fa7cf430
## Starting with the Scaffold

The Rails scaffold generator is a rapid prototyping tool that gets your system up and running in record time, and by creating just a single scaffold we were able to investigate and learn a great deal about Ruby on Rails generally.

```
bin/rails generate scaffold book title:string author:string release_date:date
```

## ActiveRecord i.e. ORM i.e. The Model

Unlike in expressJS RoR uses an Object Relational Mapper to provide an object oriented interface to the database.  We use Class methods to create new object, to find objects in the database:

```rb
    book = Book.find(1)
    new_book = Book.create(:author => "JRR", :title => "LOTR")
```

We use instance methods to interact with individual books

```rb
    book.title = "Alice in Wonderland"
    book.save
```

When you create an ActiveRecord model, a migration is also created for that model, look in `db/migrate/` to find these migrations, and run all new migrations with `bin/rails db:migrate`


## ActiveController and `config/routes.rb`

Unlike in expressJS RoR doesn't have routers where we map routes to middleware functions all in one place.  Instead, in RoR we organize all of our route logic into Controller classes and we use the `routes.rb` file to map from routes to methods on our controllers.


Methods on controllers automatically render a template with the same name as the method, unless you add a `render :template_name`, or `redirect_to some_path` directive to override that behaviour.

## Further Reading

Ruby on Rails is a big project, and it takes time to learn about it's many features, today's demonstration serves to show how far you can go with Rails while writing very little custom code, and hopefully also serves to show how all these distinct pieces begin to fit together.

 - https://guides.rubyonrails.org/action_controller_overview.html
 - https://guides.rubyonrails.org/routing.html
 - https://www.youtube.com/watch?v=sh4WrNGDvQM 