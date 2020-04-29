# Libreria

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



# Como crear una libreria 

crear un proyecto de angular pero sin aplicacion 

`ng new Libreria  --create-application=false`

 crear library 

 `ng g library <nombre de la libreria>`

 el artchivo public-api.ts tiene los archivos de exportacion que pueden usar las otras librerias.

## transpilar libreria 
 
 instalar ng-packagr

`npm install -D ng-packagr`

agregrar el siguiente script al package.json 
`"build:lib-packagr":"ng-packagr -p projects/libreria-prueba/ng-package.json"`

se puede tambien por este script pero no es recomendado

 `"build:lib":"ng build <nombre de la libreria> "` 


 ejecutar el siguiente comando 
  `npm run build:lib-packagr` 

genera la transpilación en la carpeta dist y esta listo para el envio al repositorio de librerias 




### subir paquete 

dirigirse al directorio de la libreria 
`cd dist/<nombre de la libreria>`

hacer login 

`npm login --registry= <url-resgistry> --scope=@<user>`




hacer la publicacion 
`npm publish` para repositorios privadors 

`npm publish --access public` para repositorios privados

