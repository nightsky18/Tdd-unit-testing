class Peliculas:
    def __init__(self):
        self._peliculas = []
        self._next_id = 1

    def crear(self, titulo, genero, anio, calificacion):
        if calificacion < 1.0 or calificacion > 10.0:
            raise ValueError('La calificación debe estar entre 1.0 y 10.0')
        pelicula = {
            'id': self._next_id,
            'titulo': titulo,
            'genero': genero,
            'anio': anio,
            'calificacion': calificacion,
        }
        self._next_id += 1
        self._peliculas.append(pelicula)
        return pelicula

    def obtener_todas(self):
        return list(self._peliculas)

    def obtener_por_id(self, id):
        for p in self._peliculas:
            if p['id'] == id:
                return p
        return None

    def obtener_por_genero(self, genero):
        return [p for p in self._peliculas if p['genero'] == genero]

    def actualizar(self, id, datos):
        for i, p in enumerate(self._peliculas):
            if p['id'] == id:
                self._peliculas[i] = {**p, **datos}
                return self._peliculas[i]
        return None

    def eliminar(self, id):
        for i, p in enumerate(self._peliculas):
            if p['id'] == id:
                self._peliculas.pop(i)
                return True
        return False
