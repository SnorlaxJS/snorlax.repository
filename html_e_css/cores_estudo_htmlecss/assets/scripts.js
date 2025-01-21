// Representação de cores no css3
function click_cor1() {
    window.alert("Código CSS: -----> background-color: blue;");
}

function click_cor2() {
    window.alert("Código CSS: -----> background-color: rgb(0,0,255);");
}

function click_cor3() {
    window.alert("Código CSS: -----> background-color: hsl(240,100%,50%);");
}

function click_cor4() {
    window.alert("Código CSS: -----> background-color: #0000ff;");
}

// Representação de cores com transparência no css3
function click_cor1_a() {
    window.alert("Código CSS: -----> background-color: rgba(0,0,255,0.5);");
}

function click_cor2_a() {
    window.alert("Código CSS: -----> background-color: hsla(240,100%,50%,0.5);");
}

function click_cor3_a() {
    window.alert("Código CSS: -----> background-color: #0000ff80;");
}

// Representação transparente
function click_cor1_t() {
    window.alert("Código CSS: -----> background-color: transparent;");
}

// Representação de mistura de cores
function click_cor1_cm() {
    window.alert("Código CSS: -----> background-color: #0000ff;");
}

function click_cor2_cm() {
    window.alert("Código CSS: -----> background-color: #ff0000");
}

function click_cor3_cm() {
    window.alert("Código CSS: -----> background-color: background-color: color-mix(in hsl, hsl(240, 100%, 50%), hsl(0, 100%, 50%) 70%);");
}

// Representação gradiente linear
function click_gradient1() {
    window.alert("Código CSS: -----> background-image: linear-gradient(to right, #0000ff, #cfcffd);");
}

function click_gradient2() {
    window.alert("Código CSS: -----> background-image: linear-gradient(90deg, #0000ff 50%, #cfcffd 50%);");
}

function click_gradient3() {
    window.alert("Código CSS: -----> background-image: linear-gradient(45deg, #0000ff 50%, #cfcffd 50%);");
}

function click_gradient4() {
    window.alert("Código CSS: -----> background-color: var(--azul1); | background-image: linear-gradient(-45deg, transparent 75%, var(--azul2) 75%), linear-gradient(45deg, transparent 75%, var(--azul2) 75%), linear-gradient(135deg, transparent 75%, var(--azul2) 75%), linear-gradient(-135deg, transparent 75%, var(--azul2) 75%);");
}

// Representação gradiente radial
function click_gradient1_r() {
    window.alert("Código CSS: -----> background-image: radial-gradient(circle, #0000ff, #cfcffd);");
}

function click_gradient2_r() {
    window.alert("Código CSS: -----> background-image: radial-gradient(circle, #0000ff 50%, #cfcffd 50%);");
}

function click_gradient3_r() {
    window.alert("Código CSS: -----> background-image: repeating-radial-gradient(#0000ff 50%, #cfcffd);");
}

function click_gradient4_r() {
    window.alert("Código CSS: -----> background-image: radial-gradient(closest-side at 30% 30%, #0000ff 50%, #cfcffd 50%);");
}

function click_gradient5_r() {
    window.alert("Código CSS: -----> background-image: radial-gradient(farthest-side at 70% 70%, #0000ff 50%, #cfcffd 50%);");
}

// Representação gradiente cônico
function click_gradient1_c() {
    window.alert("Código CSS: -----> background-image: conic-gradient(#0000ff, #cfcffd, #0000ff);");
}

function click_gradient2_c() {
    window.alert("Código CSS: -----> background-image: conic-gradient(#0000ff, #cfcffd, #0000ff); | border-radius: 50%;");
}

function click_gradient3_c() {
    window.alert("Código CSS: -----> background-image: conic-gradient(#0000ff 0deg 90deg, #cfcffd 90deg 180deg, #0000ff 180deg 270deg, #cfcffd 270deg);");
}

function click_gradient4_c() {
    window.alert("Código CSS: -----> background-image: conic-gradient(#0000ff 0deg 90deg, #cfcffd 90deg 180deg, #0000ff 180deg 270deg, #cfcffd 270deg); | border-radius: 50%;");
}

function click_gradient5_c() {
    window.alert("Código CSS: -----> background-image: conic-gradient(from 45deg, #0000ff, #cfcffd);");
}

function click_gradient6_c() {
    window.alert("Código CSS: -----> background-image: conic-gradient(from 45deg, #0000ff, #cfcffd); | border-radius: 50%;");
}

function click_gradient7_c() {
    window.alert("Código CSS: -----> background-image: conic-gradient(at 65% 70%, #0000ff, #cfcffd;");
}

function click_gradient8_c() {
    window.alert("Código CSS: -----> background-image: conic-gradient(at 65% 70%, #0000ff, #cfcffd; | border-radius: 50%;");
}

function click_gradient9_c() {
    window.alert("Código CSS: -----> background-image: repeating-conic-gradient(#0000ff 10%, #cfcffd 20%);");
}

function click_gradient10_c() {
    window.alert("Código CSS: -----> background-image: repeating-conic-gradient(#0000ff 10%, #cfcffd; | border-radius: 50%;");
}

// Representação de bandeiras com gradiente
function click_gradient1_ex() {
    window.alert("Código CSS: -----> background-color: yellow; | background-image: linear-gradient(45deg, transparent 75%, green 75%), linear-gradient(-45deg, transparent 75%, green 75%), linear-gradient(135deg, transparent 75%, green 75%), linear-gradient(-135deg, transparent 75%, green 75%), radial-gradient(closest-side at 50% 50%, blue 50%, transparent 50%);");
}

function click_gradient2_ex() {
    window.alert("Código CSS: -----> background-color: white; | background-image: linear-gradient(to right, green 33%, transparent 33%), linear-gradient(to left, red 33%, transparent 33%);");
}

function click_gradient3_ex() {
    window.alert("Código CSS: -----> background-color: red; | background-image: linear-gradient(to bottom, black 33.33%, transparent 33.33%), linear-gradient(to top, yellow 33.33%, transparent 33.33%);");
}

function click_gradient4_ex() {
    window.alert("Código CSS: -----> background-color: white; | background-image: radial-gradient(circle, red 50%, transparent 50%);");
}

function click_gradient5_ex() {
    window.alert("Código CSS: -----> background-color: blue; | background-image: linear-gradient(to bottom, red 25%, transparent 25%), linear-gradient(to top, red 25%, transparent 25%), radial-gradient(circle, white 30%, transparent 30%);");
}

