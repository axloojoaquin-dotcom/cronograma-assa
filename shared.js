/**
 * shared.js - Lógica común, utilidades y conexión a Supabase
 */

// 1. CONEXIÓN A SUPABASE
const SUPABASE_URL = 'https://uyaicrfaxzqmipvzgnky.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5YWljcmZheHpxbWlwdnpnbmt5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg2NzkyMDUsImV4cCI6MjEwNDI1NTIwNX0.JIQSzuVnrkS6zcajimeyTQx12LFDwX56flL__-bRzlk'; // Coloca aquí la anon key de tu panel

// Inicialización del cliente oficial de Supabase
const _supabase = (typeof supabase !== 'undefined') 
  ? supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY) 
  : null;

// 2. USUARIOS Y ROLES CENTRALIZADOS
const usuariosPermitidos = {
  'jnagel':    { pass: 'assa2020', perfil: 'Administrador' },
  'jferreyr':  { pass: 'assa2020', perfil: 'Administrador' },
  'w_cnovero': { pass: 'assa2020', perfil: 'Operador' },
  'lledesma':  { pass: 'assa2020', perfil: 'Lectura' }
};

// 3. CATÁLOGO INICIAL DE RUTAS
const catalogoInicial = {
  "019": { nombre: "Cañada de Gomez", rutas: ["019000","019001","019002","019002A","019003","019003A","019004","019005","019005A","019006","019007","019008","019009","019010","019010A","019011","019012","019013","019014","019015","019015A","019016","019017","019018","019019","019020","019021","019022","019023","019024","019024A","019025","019026","019027","019028","019029","019030","019031","019032","019033","019034","019035","019036","019037","019SINGR","UN019001"] },
  "022": { nombre: "Casilda", rutas: ["022000","022000A","022001","022002","022003","022003A","022004","022005","022005A","022006","022007","022008","022009","022010","022011","022012","022013","022014","022015","022016","022017","022018","022019","022FBV","022SINGR"] },
  "033": { nombre: "Granadero Baigorria", rutas: ["033001","033002","033003","033004","033005","033006","033007","033008","033009","033010","033011","033012","033013","033014","033SINGR"] },
  "044": { nombre: "Capitan Bermudez", rutas: ["044000","044001","044002","044003","044004","044005","044006","044007","044008","044009","044010","044011","044012","044013","044014","044015","044016","044017","044018","044019","044020","044021","044023","044024","044025","044SINGR"] },
  "045": { nombre: "Esperanza", rutas: ["045001A","045001B","045002A","045002B","045003A","045003B","045004","045005","045006","045007","045008","045009","045009A","045009B","045010","045010A","045011","045011A","045011B","045012A","045012B","045012C","045012CA","045012CB","045013A","045013B","045013C","0450042","0450052","0450062","0450072","0450082","0450092","04502400","045SINGR"] },
  "048": { nombre: "Firmat", rutas: ["048000","048001","048002","048003","048004","048005","048006","048006A","048006B","048007","048007A","048008","048008A","048008B","048009","048010","048011","048012","048013","048013A","048014","048015","048SINGR","UN048001"] },
  "050": { nombre: "Galvez", rutas: ["050001","050002","050003","050004","050005","050006","050007","050008","050009","050010","050011","050012","050013","050014","050015","050016","050017","050018","050019","050020","050021","050SINGR"] },
  "055": { nombre: "Funes", rutas: ["055001","055002","055003","055004","055005","055006","055008","055009","055010","055011","055012","055019","055020","055021","055SINGR"] },
  "098": { nombre: "Rafaela", rutas: ["098001","098002","098003","098004","098004A","098005","098006","098006A","098007","098008","098009","098010","098011","098012","098012A","098013","098014","098015","098015A","098016","098017","098017A","098018","098019","098020","098021","098022","098023","098024","098025","098026","098027","098028","098029","098029A","098030","098031","098031A","098032","098033","098034","098035","098036","098037","098038","098039","098040","098041","098042","098043","098044","098045","098046","098047","098047A","098048","098048A","098049","098050","098051","098052","098053","098054","098055","098056","098056A","098057","098057A","098058","098058A","098059","098060","098061","098062","098062A","098062B","098062C","098063","098063B","098064","098065","098066","098066A","098067","098SINGR"] },
  "101": { nombre: "Reconquista", rutas: ["101001","101002","101003","101004","101005","101006","101007","101008","101009","101010","101011","101012","101013","101014","101015","101016","101017","101018","101019","101020","101021","101022","101023","101024","101SINGR"] },
  "109": { nombre: "Rosario", rutas: ["109001","109002","109003","109004","109005","109006","109007","109008","109009","109010","109011","109012","109013","109014","109015","109016","109017","109018","109019","109020","109021","109022","109023","109024","109025","109026","109027","109028","109029","109030","109031","109032","109033","109034","109035","109036","109037","109038","109039","109039A","109040","109040A","109041","109042","109043","109044","109045","109046","109047","109048","109049","109050","109051","109051A","109051B","109052","109052A","109053","109053A","109054","109055","109056","109057","109058","109058A","109059","109059A","109060","109060A","109061","109062","109063","109064","109065","109066","109067","109068","109069","109070","109071","109072","109073","109074","109075","109076","109077","109078","109079","109080","109081","109082","109083","109084","109085","109086","109087","109088","109089","109090","109091","109092","109093","109094","109095","109096","109097","109098","109099","109100","109101","109102","109103","109104","109105","109106","109107","109108","109109","109110","109111","109112","109113","109114","109114A","109115","109115A","109116","109117","109118","109119","109120","109121","109122","109123","109124","109125","109126","109127","109128","109129","109130","109131","109132","109133","109134","109135","109136","109137","109138","109139","109140","109141","109141A","109142","109142A","109143","109144","109145","109146","109147","109148","109149","109150","109151","109152","109153","109154","109155","109156","109157","109158","109159","109160","109161","109162","109163","109164","109165","109167","109168","109169","109170","109171","109172","109173","109174","109175","109176","109177","109178","109179","109180","109181","109182","109183","109184","109185","109186","109187","109188","109189","109190","109191","109192","109193","109194","109195","109196","109197","109198","109199","109200","109201","109202","109203","109204","109205","109206","109207","109208","109209","109210","109211","109212","109213","109214","109215","109216","109217","109218","109219","109220","109221","109222","109223","109224","109225","109226","109227","109229","109230","109231","109232","109233","109235","109236","109237","109238","109239","109240","109241","109242","109243","109244","109245","109246","109247","109248","109249","109250","109251","109252","109253","109254","109255","109256","109257","109258","109259","109GCO01","109GCO02","109GCO03","109GCO04","109GCO05","109GCO06","109GCO07","109GCO08","109GOLF","109PAL","109SINGR"] },
  "112": { nombre: "Rufino", rutas: ["112000","112001","112002","112003","112004","112005","112006","112007","112008","112009","112010","112011","112012","112013","112014","112015","112016","112017","112018","112SINGR"] },
  "120": { nombre: "San Lorenzo", rutas: ["120000","120001","120002","120003","120004","120005","120006","120007","120008","120009","120010","120011","120012","120013","120014","120015","120016","120017","120018","120022","120023","120024","120025","120026","120027","120028","120029","120030","120031","120SINGR"] },
  "129": { nombre: "Santa Fe Capital", rutas: ["129001","129002","129003","129003A","129004","129005","129006","129007","129008","129009","129010","129010A","129011","129012","129013","129014","129015","129016","129017","129018","129019","129019A","129020","129020A","129021","129022","129022A","129023","129023A","129024","129025","129026","129027","129028","129029","129029A","129030","129031","129032","129033","129033A","129034","129034A","129035","129036","129037","129038","129038A","129039","129039A","129040","129041","129042","129043","129044","129045","129045A","129045B","129046","129047","129048","129049","129050","129051","129052","129053","129054","129054A","129054B","129055","129055A","129056","129057","129058","129058A","129058B","129059","129060","129060A","129060B","129061","129061A","129061B","129062","129063","129064","129065","129065A","129065B","129066","129067","129068","129069","129070","129072","129073","129073A","129073B","129074","129075","129076","129077","129078","129079","129080","129081","129082","129083","129084","129085","129086","129087","129088","129089","129090","129091","129091A","129092","12900100","12911500","129SINGR"] },
  "169": { nombre: "Villa Gobernador Galvez", rutas: ["169001","169002","169003","169004","169005","169006","169007","169008","169009","169010","169011","169012","169013","169014","169015","169016","169017","169SINGR"] }
};

// 4. SESIÓN Y AUTENTICACIÓN
function verificarSesion() {
  const sesionStr = localStorage.getItem('assa_usuario_sesion');
  if (!sesionStr) {
    window.location.href = 'login.html';
    return null;
  }
  return JSON.parse(sesionStr);
}

function cerrarSesion() {
  localStorage.removeItem('assa_usuario_sesion');
  window.location.href = 'login.html';
}

// 5. NAVBAR ESTÁNDAR
function renderizarNavbar(paginaActiva) {
  const usuario = verificarSesion();
  if (!usuario) return;

  const header = document.querySelector('header');
  if (!header) return;

  const esAdmin = (usuario.perfil === 'Administrador');

  header.innerHTML = `
    <div class="brand-title">
      <img src="../img/LogoIcon.png" alt="Logo" class="navbar-logo">
      <span>Sistema Gestión Cronograma</span>
    </div>
    <nav id="mainNav">
      <span class="user-greeting">Hola, <strong>${usuario.username}</strong> (${usuario.perfil})</span>
      ${esAdmin ? `<a href="planificacion.html" class="nav-tab ${paginaActiva === 'planificacion' ? 'active' : ''}">Planificación</a>` : ''}
      ${esAdmin ? `<a href="lista-uls.html" class="nav-tab ${paginaActiva === 'lista-uls' ? 'active' : ''}">Lista UL´s</a>` : ''}
      ${esAdmin ? `<a href="feriados.html" class="nav-tab ${paginaActiva === 'feriados' ? 'active' : ''}">Días No Laborables</a>` : ''}
      <a href="aprobaciones.html" class="nav-tab ${paginaActiva === 'aprobaciones' ? 'active' : ''}">
        Bandeja Aprobaciones <span class="badge" id="badgeNavbar" style="display:none;"></span>
      </a>
      <a href="historial.html" class="nav-tab ${paginaActiva === 'historial' ? 'active' : ''}">Historial y Versiones</a>
      <a class="logout" onclick="cerrarSesion()">Cerrar Sesión</a>
    </nav>
  `;

  actualizarContadorNavbar();
}

// 6. FUNCIONES DE BASE DE DATOS (SUPABASE ASÍNCRONAS)
async function getPropuestasDB() {
  if (!_supabase) return [];
  const { data, error } = await _supabase
    .from('propuestas')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error al obtener propuestas de Supabase:', error.message);
    return [];
  }
  return data || [];
}

async function guardarPropuestaDB(nuevaPropuesta) {
  if (!_supabase) return null;
  const { data, error } = await _supabase
    .from('propuestas')
    .insert([nuevaPropuesta])
    .select();

  if (error) {
    console.error('Error al guardar propuesta en Supabase:', error.message);
    alert('Error al guardar en Supabase: ' + error.message);
    return null;
  }
  return data[0];
}

async function actualizarPropuestaDB(id, cambios) {
  if (!_supabase) return null;
  const { data, error } = await _supabase
    .from('propuestas')
    .update(cambios)
    .eq('id', id)
    .select();

  if (error) {
    console.error('Error al actualizar propuesta en Supabase:', error.message);
    alert('Error al actualizar en Supabase: ' + error.message);
    return null;
  }
  return data[0];
}

async function actualizarContadorNavbar() {
  const lista = await getPropuestasDB();
  const pendientes = lista.filter(p => !p.estado.includes('Aprobado')).length;
  const badge = document.getElementById('badgeNavbar');
  if (badge) {
    if (pendientes > 0) {
      badge.innerText = pendientes;
      badge.style.display = 'inline-block';
    } else {
      badge.style.display = 'none';
    }
  }
}

// 7. GESTIÓN DEL CATÁLOGO DE RUTAS
function getRutasBase() {
  const data = localStorage.getItem('assa_catalogo_rutas_v1');
  if (data) {
    try { return JSON.parse(data); } catch(e){}
  }
  return JSON.parse(JSON.stringify(catalogoInicial));
}

function saveRutasBase(catalogo) {
  localStorage.setItem('assa_catalogo_rutas_v1', JSON.stringify(catalogo));
}

// 8. UTILIDADES DE FECHAS Y CÁLCULOS HÁBILES
function formatDate(date) {
  if (!date || isNaN(date.getTime())) return '';
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = date.getFullYear();
  return `${dd}.${mm}.${yyyy}`;
}

function parseDate(str) {
  if (!str) return null;
  if (str instanceof Date) return isNaN(str.getTime()) ? null : str;
  if (typeof str === 'number') {
    return new Date(Math.round((str - 25569) * 86400 * 1000));
  }
  const cleanStr = String(str).trim();
  const parts = cleanStr.split(/[./-]/);
  if (parts.length === 3) {
    if (parts[0].length === 4) return new Date(parts[0], parts[1] - 1, parts[2]);
    return new Date(parts[2], parts[1] - 1, parts[0]);
  }
  const d = new Date(cleanStr);
  return isNaN(d.getTime()) ? null : d;
}

function esDiaNoLaborable(date) {
  const day = date.getDay();
  if (day === 0 || day === 6) return true;
  const feriadosText = localStorage.getItem('assa_feriados') || '';
  const listaFeriados = feriadosText.split('\n').map(f => f.trim()).filter(Boolean);
  return listaFeriados.includes(formatDate(date));
}

function agregarDiasHabiles(fechaBase, diasDelta) {
  let fecha = new Date(fechaBase.getTime());
  const paso = diasDelta > 0 ? 1 : -1;
  let contador = Math.abs(diasDelta);

  while (contador > 0) {
    fecha.setDate(fecha.getDate() + paso);
    if (!esDiaNoLaborable(fecha)) {
      contador--;
    }
  }
  return fecha;
}

function formatTurno(ruta, date) {
  if (!date || isNaN(date.getTime())) return `${ruta}-SINDATO`;
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = date.getFullYear();
  return `${ruta}-${yyyy}${mm}${dd}`;
}