const fechaNac = document.getElementById('fecha_nacimiento');
const fechaIng = document.getElementById('fecha_ingreso');
const fechaActual = new Date();

// Obtén la fecha actual en formato ISO (YYYY-MM-DD)
const fechaActualISO = fechaActual.toISOString().split('T')[0];

// Establece la fecha actual como el valor máximo del input
fechaNac.setAttribute('max', fechaActualISO);
fechaIng.setAttribute('max', fechaActualISO);


const imagenInput = document.getElementById('imagen');
const imagenDiv = document.getElementById('imagenDiv');

imagenInput.addEventListener('change', function(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  if (file && file.type.startsWith('image/')) {
    reader.onload = function(e) {
      const imageUrl = e.target.result;
      imagenDiv.innerHTML = `<img src="${imageUrl}" alt="Imagen seleccionada">`;
    };

    reader.readAsDataURL(file);
  } else {
    imagenDiv.innerHTML = 'Error: Selecciona un archivo de imagen válido.';
  }
});


class Empleado {
    constructor(nombre, apellido, genero, fecha_nacimiento, foto, fecha_ingreso, salario) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.genero = genero;
        this.fecha_nacimiento = fecha_nacimiento;
        this.foto = foto;
        this.fecha_ingreso = fecha_ingreso;
        this.salario = salario;
    }
    darNombre() {
        return this.nombre;
    }

    darApellido() {
        return this.apellido;
    }

    darGenero() {
        return this.genero;
    }

    darFecha_Nacimiento() {
        return this.fecha_nacimiento;
    }

    darFoto() {
        return this.foto;
    }

    darFecha_Ingreso() {
        return this.fecha_ingreso;
    }

    darSalario() {
        return this.salario;
    }

    darEdad(){
        var f1=new Date(this.fecha_nacimiento);
        var f2=new Date();
        var edad=(f2-f1)/365/24/60;
        return Math.floor(edad) ;

    }

}

let e = new Empleado();

function modificar() {
    //INGRESO DE DATOS
    let nombre_emp = document.getElementById("nombre").value;
    let apellido_emp = document.getElementById("apellido").value;
    let genero_emp = document.getElementById("genero").value;
    let fechaN_emp = document.getElementById("fecha_nacimiento").value;
    // let foto_emp = document.getElementById("nombre").value;
    let fechaI_emp = document.getElementById("fecha_ingreso").value;
    let salario_emp = document.getElementById("salario").value;

    console.log("Ver", /\d/.test(nombre_emp.trim()));
    console.log("Num",isNaN(salario_emp));

    if (nombre_emp == "" || apellido_emp == "" || genero_emp == "" || fechaN_emp == "" || fechaI_emp == "" || salario_emp == "") {
        alert("Debe ingresar todos los campos");
    }
    else {//Debemos validar que no ingrese numeros en nombre, apellido,...
        // si la cadena contiene al menos un número el método test() devolverá true
        if (/\d/.test(nombre_emp.trim())) {
            alert("No se permite numeros en el campo del nombre");
        } else {
            //validar que el salario sea un numero ISNAN y sea positivo >0

            alert("Datos corectos");
            

            e.nombre = nombre_emp;
            e.apellido = apellido_emp;
            e.genero = genero_emp;
            e.fecha_nacimiento = fechaN_emp;
            e.foto = "foto";
            e.fecha_ingreso = fechaI_emp;
            e.salario = salario_emp;
            console.log(e);
            console.log(e.fecha_nacimiento,typeof(e.fecha_nacimiento));
            let f = new Date(fechaN_emp);
            let hoy=new Date();
            console.log(f,hoy);
            const diferenciaMilisegundos = hoy - f;
            console.log(diferenciaMilisegundos);
            const edad = Math.floor(diferenciaMilisegundos / 31557600000);
            console.log(edad);

        }
    }
}

function showHelp() {
    let texto = document.getElementById("help");
    let mensaje = "Calcular edad del empleado";
    texto.textContent = mensaje;
}
function hideHelp() {
    let texto = document.getElementById("help");
    let mensaje = "";
    texto.textContent = mensaje;
}