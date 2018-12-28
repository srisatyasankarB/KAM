# TylorMedicalCenter

Angular version 7.1.0.
base href in index.html should be set to "<base href="/">" on local.
base href in index.html should be set to "
<script>
document.write('<base href="' + String(document.location).replace(String(document.location).substr(String(document.location).indexOf("index.html")), '') + '">')
</script>" while deploying to Veeva environment.

## Development server

Run `ng serve -c mock` for a dev server to run using mock service. Run `ng serve` for a dev server to run using actual service fetching data from Veeva. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build -c mock --prod` to build the project using mock service for data. Run `ng build --prod` to build the project using actual service for Veeva data. The build artifacts will be stored in the `dist/` directory.