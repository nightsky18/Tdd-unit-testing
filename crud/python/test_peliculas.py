from peliculas import Peliculas
import pytest


@pytest.fixture
def db():
    return Peliculas()


# ── CREAR ──────────────────────────────────────────────────────────────────────
class TestCrear:
    def test_crea_pelicula_con_id_autogenerado(self, db):
        pelicula = db.crear('Inception', 'Ciencia Ficción', 2010, 9.3)
        assert pelicula['id'] == 1
        assert pelicula['titulo'] == 'Inception'
        assert pelicula['genero'] == 'Ciencia Ficción'
        assert pelicula['anio'] == 2010
        assert pelicula['calificacion'] == 9.3

    def test_ids_son_autoincrementales(self, db):
        db.crear('Película A', 'Acción', 2000, 7.0)
        segunda = db.crear('Película B', 'Drama', 2005, 8.0)
        assert segunda['id'] == 2

    def test_calificacion_fuera_de_rango_lanza_error(self, db):
        with pytest.raises(ValueError):
            db.crear('Mala', 'Terror', 2020, 11.0)
        with pytest.raises(ValueError):
            db.crear('Peor', 'Terror', 2020, 0.5)


# ── LEER TODAS ─────────────────────────────────────────────────────────────────
class TestObtenerTodas:
    def test_retorna_lista_vacia_si_no_hay_peliculas(self, db):
        assert db.obtener_todas() == []

    def test_retorna_todas_las_peliculas(self, db):
        db.crear('Interstellar', 'Ciencia Ficción', 2014, 8.6)
        db.crear('El Padrino', 'Drama', 1972, 9.2)
        assert len(db.obtener_todas()) == 2


# ── LEER POR ID ────────────────────────────────────────────────────────────────
class TestObtenerPorId:
    def test_retorna_la_pelicula_con_el_id_indicado(self, db):
        db.crear('Joker', 'Drama', 2019, 8.5)
        resultado = db.obtener_por_id(1)
        assert resultado['titulo'] == 'Joker'

    def test_retorna_none_si_id_no_existe(self, db):
        assert db.obtener_por_id(99) is None


# ── FILTRAR POR GÉNERO ─────────────────────────────────────────────────────────
class TestObtenerPorGenero:
    def test_retorna_solo_peliculas_del_genero_indicado(self, db):
        db.crear('Matrix', 'Acción', 1999, 8.7)
        db.crear('Titanic', 'Romance', 1997, 7.8)
        db.crear('John Wick', 'Acción', 2014, 7.4)
        accion = db.obtener_por_genero('Acción')
        assert len(accion) == 2
        assert all(p['genero'] == 'Acción' for p in accion)

    def test_retorna_lista_vacia_si_no_hay_peliculas_del_genero(self, db):
        db.crear('Matrix', 'Acción', 1999, 8.7)
        assert db.obtener_por_genero('Terror') == []


# ── ACTUALIZAR ─────────────────────────────────────────────────────────────────
class TestActualizar:
    def test_actualiza_campos_de_una_pelicula(self, db):
        db.crear('Avatar', 'Aventura', 2009, 7.8)
        actualizada = db.actualizar(1, {'calificacion': 8.0, 'titulo': 'Avatar: Remastered'})
        assert actualizada['calificacion'] == 8.0
        assert actualizada['titulo'] == 'Avatar: Remastered'
        assert actualizada['genero'] == 'Aventura'

    def test_retorna_none_si_id_no_existe(self, db):
        assert db.actualizar(99, {'titulo': 'No existe'}) is None


# ── ELIMINAR ───────────────────────────────────────────────────────────────────
class TestEliminar:
    def test_elimina_pelicula_y_retorna_true(self, db):
        db.crear('Parasite', 'Suspenso', 2019, 8.6)
        assert db.eliminar(1) is True
        assert db.obtener_todas() == []

    def test_retorna_false_si_id_no_existe(self, db):
        assert db.eliminar(99) is False
