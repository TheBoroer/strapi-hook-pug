# strapi-hook-pug
This hook allows you to use the PUG (formerly called JADE) template engine with custom options.

(developed, tested and working on strapi version: 3.0.0-beta.7)

## Configuration

To configure your hook with custom options, you need to edit your `./config/hook.json` file in your Strapi app.
```javascript
{
  ...
  "pug": {
    "enabled": true,
    "ext": ".pug",
    "debug": true,
    "pretty": false,
    "compileDebug": false,
    "noCache": true
  }
}
```

Here's a complete example of what your `hook.json` file might look like:
```javascript
{
  "timeout": 3000,
  "load": {
    "before": [],
    "order": [
      "Define the hooks' load order by putting their names in this array in the right order"
    ],
    "after": []
  },
  "pug": {
    "enabled": true,
    "ext": ".pug",
    "debug": true,
    "pretty": false,
    "compileDebug": false,
    "noCache": true
  }
}
```
More information in the koa-pug module https://www.npmjs.com/package/koa-pug

## Usage

Insert code in your controller to render a view.

```javascript
module.exports = {
  home: async (ctx) => {
    return ctx.render('home', {
      title: 'My app title'
    });
  }
};
```

This will render the `views/home.pug` file and you will have access to `#{title}` data in your pug file.
