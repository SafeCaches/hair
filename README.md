# NG-WP

A minimal WordPress theme that runs off of an Angular 4 app, built with assistance from the tutorial at  http://doppiaeast.com/article/angular-2-wordpress-theme-setup/.

## Usage

First, run `npm install`.

From the environments folder, there are two files -- one for production and one for development. Open each up and set wpBase to whatever you dev and live sites are. 

For development, the command to run is `ng serve`, in the terminal inside the project folder, and the CLI will do the rest. The content of the site is managed from the WordPress admin panel.  

To push the project to the server, run `ng build --prod --deploy-url="/wp-content/themes/{THEME_DIRECTORY_NAME}/dist/"` from your command line. This will output a `dist` folder. Upload index.php, styles.css, functions.php, and the dist folder to your theme directory on your server. You should be good to go!

This project works well with the Angular CLI.

The project can be found at the following url https://jennieselegantbride.com/

## Contributions

If you would like to make a Pull request, I would love to have you contribute