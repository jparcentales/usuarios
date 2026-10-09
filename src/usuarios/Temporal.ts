export class Temporal {
  constructor(
    public id: number,
    public nombre: string,
    public edad: number,
  ) {}
}

export const usuarios: Temporal[] = [];

let ultimoId = 0;

export function generarSiguienteId(): number {
  const mayorIdExistente = usuarios.reduce(
    (mayor, usuario) => Math.max(mayor, usuario.id),
    0,
  );
  ultimoId = Math.max(ultimoId, mayorIdExistente) + 1;
  return ultimoId;
}

//inicia una aplicación en nestjs para gestionar un crud de usuarios configurando el controlador el servicio y los modulos necesarios
//necesito crear un archivo temporal en typescript que simule una base de datos usando una clase con un arreglo en memoria para guardar usuarios
//conecta el arreglo guardado en el archivo temporal con el servicio para implementar los metodos basicos de creación consulta y eliminacion
//soluciona un problema al enviar una solicitud post donde sale un error indicando que no se pueden leer propiedades indefinidas al intentar acceder al nombre del cuerpo recibido
//realiza pruebas utilizando una herramienta externa para verificar que las peticiones post y get guarden y devuelvan los registros de manera adecuada
//agrega la funcionalidad para el metodo put en el backend permitiendo reemplazar la informacion de un registro existente mediante su identificador
//implementa el metodo head en el controlador para consultar unicamente los encabezados de la respuesta sin incluir contenido en el cuerpo
//añade el metodo options en las rutas para informar cuales son los metodos http permitidos y soportados por el servidor
//modifica y mejora los metodos head y options existentes para que devuelvan informacion dinamica y util integrada con el servicio y la configuracion del proyecto
//explica los pasos necesarios para comprobar el funcionamiento de las peticiones head y options utilizando postman y revisando la pestana de encabezados
//añade validaciones adicionales utilizando pipes o dtos para asegurar que los datos enviados al crear un usuario tengan el formato correcto
//implementa el metodo patch para permitir actualizaciones parciales de los datos de un usuario sin necesidad de enviar todo el objeto
//configura un sistema basico de manejo de excepciones para que la api devuelva mensajes claros cuando un usuario no sea encontrado
//enviame los códigos necesarios para ejecutar todo el proyecto y verificar el funcionamiento del mismo