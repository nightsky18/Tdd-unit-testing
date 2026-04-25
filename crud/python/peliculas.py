# Definición de la clase Peliculas que actuará como nuestro gestor de datos (Simulando una base de datos en memoria)
class Peliculas:
    # Método constructor que se ejecuta al crear una instancia de la clase
    def __init__(self):
        # Inicializamos una lista vacía para almacenar los diccionarios de cada película
        self._peliculas = []
        # Inicializamos un contador para asignar IDs únicos de forma incremental, empezando en 1
        self._next_id = 1

    # Método para crear y añadir una nueva película a nuestro sistema
    def crear(self, titulo, genero, anio, calificacion):
        # Validación de negocio: comprobamos que la calificación esté en el rango permitido (1.0 a 10.0)
        if calificacion < 1.0 or calificacion > 10.0:
            # Si no es válida, lanzamos una excepción de tipo ValueError con un mensaje explicativo
            raise ValueError('La calificación debe estar entre 1.0 y 10.0')
        
        # Creamos un diccionario que representa el objeto película con sus propiedades
        pelicula = {
            'id': self._next_id,          # Asignamos el ID actual almacenado en el contador
            'titulo': titulo,             # Guardamos el título pasado como argumento
            'genero': genero,             # Guardamos el género pasado como argumento
            'anio': anio,                 # Guardamos el año pasado como argumento
            'calificacion': calificacion, # Guardamos la calificación validada
        }
        
        # Incrementamos el contador de IDs para que la siguiente película tenga un ID diferente y único
        self._next_id += 1
        
        # Añadimos el diccionario de la película recién creada a nuestra lista principal
        self._peliculas.append(pelicula)
        
        # Devolvemos el objeto película creado para que quien llamó al método pueda usarlo
        return pelicula

    # Método para obtener el listado completo de películas almacenadas
    def obtener_todas(self):
        # Devolvemos una copia de la lista para evitar que se modifique la lista original desde fuera
        return list(self._peliculas)

    # Método para buscar una película específica utilizando su identificador único (ID)
    def obtener_por_id(self, id):
        # Recorremos cada película dentro de nuestra lista interna
        for p in self._peliculas:
            # Verificamos si el ID de la película actual coincide con el ID buscado
            if p['id'] == id:
                # Si lo encontramos, devolvemos el diccionario de la película inmediatamente
                return p
        # Si terminamos de recorrer la lista y no encontramos ninguna coincidencia, devolvemos None (nulo)
        return None

    # Método para filtrar y obtener películas que pertenezcan a un género específico
    def obtener_por_genero(self, genero):
        # Usamos una "list comprehension" para crear una nueva lista con solo las películas que coincidan
        # Recorre cada 'p' en 'self._peliculas' y la incluye si 'p["genero"]' es igual al género buscado
        return [p for p in self._peliculas if p['genero'] == genero]

    # Método para actualizar la información de una película existente identificada por su ID
    def actualizar(self, id, datos):
        # Recorremos la lista usando enumerate para obtener tanto el índice (i) como la película (p)
        for i, p in enumerate(self._peliculas):
            # Comprobamos si el ID de la película en esta posición es el que queremos actualizar
            if p['id'] == id:
                # Actualizamos la película combinando el diccionario original (**p) con los nuevos datos (**datos)
                # El operador ** desempaqueta los diccionarios; si hay claves repetidas, prevalecen las de 'datos'
                self._peliculas[i] = {**p, **datos}
                # Devolvemos la película ya actualizada
                return self._peliculas[i]
        # Si no encontramos el ID proporcionado, devolvemos None indicando que no se pudo actualizar
        return None

    # Método para eliminar una película del sistema basándose en su ID
    def eliminar(self, id):
        # Recorremos la lista con índice y objeto para poder identificar la posición exacta
        for i, p in enumerate(self._peliculas):
            # Verificamos si encontramos la película con el ID especificado
            if p['id'] == id:
                # Usamos el método pop() de las listas para eliminar el elemento en la posición 'i'
                self._peliculas.pop(i)
                # Retornamos True indicando que la operación de eliminación fue exitosa
                return True
        # Si el bucle termina sin encontrar el ID, retornamos False indicando que no se borró nada
        return False
