# Importamos la clase Peliculas desde el archivo peliculas.py para poder probar sus funcionalidades
from peliculas import Peliculas
# Importamos la librería pytest, que es el framework que usaremos para ejecutar las pruebas
import pytest


# Definimos una 'fixture' de pytest. Las fixtures son funciones que preparan un estado para las pruebas.
# En este caso, 'db' nos devolverá una instancia nueva de Peliculas antes de cada test.
@pytest.fixture
def db():
    # Retornamos una nueva instancia de la clase Peliculas para asegurar que cada test sea independiente
    return Peliculas()


# Grupo de pruebas relacionadas con la funcionalidad de CREAR películas
# ── CREAR ──────────────────────────────────────────────────────────────────────
class TestCrear:
    # Prueba para verificar que al crear una película, se le asigna un ID automático correctamente
    def test_crea_pelicula_con_id_autogenerado(self, db):
        # Llamamos al método crear pasándole los datos de una película
        pelicula = db.crear('Inception', 'Ciencia Ficción', 2010, 9.3)
        # Verificamos (asertamos) que el ID asignado a la primera película sea 1
        assert pelicula['id'] == 1
        # Verificamos que el título guardado coincida con el proporcionado
        assert pelicula['titulo'] == 'Inception'
        # Verificamos que el género guardado coincida con el proporcionado
        assert pelicula['genero'] == 'Ciencia Ficción'
        # Verificamos que el año guardado coincida con el proporcionado
        assert pelicula['anio'] == 2010
        # Verificamos que la calificación guardada coincida con la proporcionada
        assert pelicula['calificacion'] == 9.3

    # Prueba para comprobar que los IDs se incrementan de uno en uno con cada nueva película
    def test_ids_son_autoincrementales(self, db):
        # Creamos la primera película (ID debería ser 1)
        db.crear('Película A', 'Acción', 2000, 7.0)
        # Creamos la segunda película
        segunda = db.crear('Película B', 'Drama', 2005, 8.0)
        # Verificamos que el ID de la segunda película sea efectivamente 2
        assert segunda['id'] == 2

    # Prueba para validar que no se permiten calificaciones fuera del rango 1.0 - 10.0
    def test_calificacion_fuera_de_rango_lanza_error(self, db):
        # Verificamos que se lance una excepción ValueError cuando la calificación es 11.0 (mayor a 10)
        with pytest.raises(ValueError):
            db.crear('Mala', 'Terror', 2020, 11.0)
        # Verificamos que se lance una excepción ValueError cuando la calificación es 0.5 (menor a 1)
        with pytest.raises(ValueError):
            db.crear('Peor', 'Terror', 2020, 0.5)


# Grupo de pruebas para la funcionalidad de LEER TODAS las películas
# ── LEER TODAS ─────────────────────────────────────────────────────────────────
class TestObtenerTodas:
    # Prueba para verificar que si no hay datos, el sistema retorna una lista vacía
    def test_retorna_lista_vacia_si_no_hay_peliculas(self, db):
        # Invocamos el método y comparamos el resultado con una lista vacía []
        assert db.obtener_todas() == []

    # Prueba para verificar que el método retorna todos los elementos almacenados
    def test_retorna_todas_las_peliculas(self, db):
        # Insertamos dos películas de prueba
        db.crear('Interstellar', 'Ciencia Ficción', 2014, 8.6)
        db.crear('El Padrino', 'Drama', 1972, 9.2)
        # Verificamos que la longitud de la lista resultante sea exactamente 2
        assert len(db.obtener_todas()) == 2


# Grupo de pruebas para buscar películas por su ID único
# ── LEER POR ID ────────────────────────────────────────────────────────────────
class TestObtenerPorId:
    # Prueba para comprobar que se puede recuperar una película específica usando su ID
    def test_retorna_la_pelicula_con_el_id_indicado(self, db):
        # Creamos una película (obtendrá el ID 1)
        db.crear('Joker', 'Drama', 2019, 8.5)
        # Buscamos la película con ID 1
        resultado = db.obtener_por_id(1)
        # Verificamos que el título de la película encontrada sea el esperado
        assert resultado['titulo'] == 'Joker'

    # Prueba para comprobar que el sistema devuelve None si el ID no existe
    def test_retorna_none_si_id_no_existe(self, db):
        # Intentamos buscar un ID que sabemos que no hemos creado (99)
        # Verificamos que el resultado sea None
        assert db.obtener_por_id(99) is None


# Grupo de pruebas para filtrar películas según su género
# ── FILTRAR POR GÉNERO ─────────────────────────────────────────────────────────
class TestObtenerPorGenero:
    # Prueba para verificar que el filtro por género funciona correctamente y devuelve solo lo pedido
    def test_retorna_solo_peliculas_del_genero_indicado(self, db):
        # Insertamos tres películas con géneros variados
        db.crear('Matrix', 'Acción', 1999, 8.7)
        db.crear('Titanic', 'Romance', 1997, 7.8)
        db.crear('John Wick', 'Acción', 2014, 7.4)
        # Solicitamos solo las de género 'Acción'
        accion = db.obtener_por_genero('Acción')
        # Verificamos que se hayan encontrado 2 películas de acción
        assert len(accion) == 2
        # Verificamos que todas las películas en la lista resultante tengan 'Acción' como género
        assert all(p['genero'] == 'Acción' for p in accion)

    # Prueba para verificar que devuelve una lista vacía si no hay coincidencias de género
    def test_retorna_lista_vacia_si_no_hay_peliculas_del_genero(self, db):
        # Creamos una película de Acción
        db.crear('Matrix', 'Acción', 1999, 8.7)
        # Buscamos películas de 'Terror'
        # Verificamos que el resultado sea una lista vacía
        assert db.obtener_por_genero('Terror') == []


# Grupo de pruebas para la funcionalidad de ACTUALIZAR datos de una película existente
# ── ACTUALIZAR ─────────────────────────────────────────────────────────────────
class TestActualizar:
    # Prueba para verificar que se pueden modificar campos específicos de una película
    def test_actualiza_campos_de_una_pelicula(self, db):
        # Creamos una película inicial
        db.crear('Avatar', 'Aventura', 2009, 7.8)
        # Actualizamos la calificación y el título de la película con ID 1
        actualizada = db.actualizar(1, {'calificacion': 8.0, 'titulo': 'Avatar: Remastered'})
        # Verificamos que la calificación haya cambiado a 8.0
        assert actualizada['calificacion'] == 8.0
        # Verificamos que el título haya cambiado
        assert actualizada['titulo'] == 'Avatar: Remastered'
        # Verificamos que el género (que no se actualizó) se mantenga igual
        assert actualizada['genero'] == 'Aventura'

    # Prueba para verificar que devuelve None si intentamos actualizar un ID inexistente
    def test_retorna_none_si_id_no_existe(self, db):
        # Intentamos actualizar la película con ID 99
        assert db.actualizar(99, {'titulo': 'No existe'}) is None


# Grupo de pruebas para la funcionalidad de ELIMINAR una película
# ── ELIMINAR ───────────────────────────────────────────────────────────────────
class TestEliminar:
    # Prueba para verificar que una película se borra correctamente y el método confirma el éxito
    def test_elimina_pelicula_y_retorna_true(self, db):
        # Creamos una película
        db.crear('Parasite', 'Suspenso', 2019, 8.6)
        # Verificamos que el método eliminar retorne True
        assert db.eliminar(1) is True
        # Verificamos que al obtener todas las películas, la lista esté ahora vacía
        assert db.obtener_todas() == []

    # Prueba para verificar que el método retorna False si el ID a eliminar no se encuentra
    def test_retorna_false_si_id_no_existe(self, db):
        # Intentamos eliminar un ID inexistente y verificamos que el resultado sea False
        assert db.eliminar(99) is False
