// ===== DADOS DOS FILMES =====
const categories = [
    {
        title: "Melhores filmes",
        items: [
            {
                img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgIbUH0i9mwcRqy1fERh0-yWTWAh8FBqxK2C3piMSsfHTnEgragwjB9mn1TqF6W_qpbWtWYZ6xzBgvKGsw5wXdncsFUPHYFigiLk15aapBDhKQN2-jz5wBUUuk8wRhWzVu2hTk9hnjmddw/s1600/harry+potter+e+a+pedra+filosofal.png", top10: true, badge: "Clássico", badgeColor: "red", progress: 0,
                youtube: "https://www.youtube.com/embed/nIkfYVetF0g"
            },
            {
                img: "https://oregional.com.br/media/blog/093c40f9c5e59c0aa801cdff9775773c.jpg", progress: 0,
                youtube: "https://www.youtube.com/watch?v=i1kqPpirUs4"
            },
            {
                img:"https://sm.ign.com/ign_pt/screenshot/default/jumanji-movie-2017-1_x2mw.jpg", progress: 0,
                youtube: "https://www.youtube.com/watch?v=S0AzmVrwKrQ"
            },
            {
                img: "https://is1-ssl.mzstatic.com/image/thumb/PKrjCf3NHsHbYFyooWRDfA/1200x675.jpg", progress: 0,
                youtube: "https://www.youtube.com/watch?v=DYFBYfzA90E"
            },
            {
                img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg0grpp78IWqTm_l6NgUKu1Lg701FnaDmgLHq1C-Dgt5zG0j5yAkUqN2cPsI-XDCYXDPdOeP_53Mm7ylqEDDe0SVCCjuAYNEQKTPpn40UlRQRLg3BbAswBE7JyU4PCCUPQI3qlQm57EOuI/s1600/Skyline.jpg", progress: 0,
                youtube: "https://www.youtube.com/watch?v=XHko5AdJzcw"
            }
        ]
    },
    {
        title: "Séries",
        items: [
            { img: "https://m.media-amazon.com/images/S/pv-target-images/7b9f1fe3dfde01cc80b041a497c0b9d33c61a1f890848a96f978a6187c35b6ab.jpg", badge: "1° Temporada", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=Inozc9Oq1bs" },
            { img: "https://i.pinimg.com/736x/c4/6f/94/c46f94b723b02533a0d39339f7172ce9.jpg", youtube: "https://www.youtube.com/watch?v=RMmGQNNl164" },
            { img: "https://http2.mlstatic.com/D_NQ_NP_905691-MLB79353845604_092024-O.webp", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=fUNtatXpVl8" },
            { img: "https://blogs.uai.com.br/opipoqueiro/wp-content/uploads/sites/54/2020/06/Peaky-Blinders-01.jpg", badge: "Exclusivo", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=oVzVdvGIC7U" },
            { img: "https://m.media-amazon.com/images/S/pv-target-images/406f466b211d1df68335572611c0f710696f1b4df4c123f2c776576eac4eb919.jpg", badgeColor: "red", youtube:"https://www.youtube.com/watch?v=Q5WXH1hOgAA" },
        ]
    },
    {
        title: "Para maratonar",
        items: [
            { img: "https://blog.vidangel.com/wp-content/uploads/2022/08/LockeAndKey_Blog_Image.jpg", youtube: "https://www.youtube.com/watch?v=LYELxMKZPHA" },
            { img: "https://www.showmetech.com.br/wp-content/uploads//2022/12/Wandinha-imagem-destacada-1.webp", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=4vi6ZWe_3Yc" },
            { img: "https://oespecialista.safra.com.br/wp-content/uploads/2021/10/squid-game-round-6-netflix.jpg", badge: "Nova Temporada", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=HWKsHuWEBiA" },
            { img: "https://ntvb.tmsimg.com/assets/p12180985_b_h10_aa.jpg?w=960&h=540", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=UsRhxZjvXKU" },
            { img: "https://i.ytimg.com/vi/OJCbEude3_E/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDzh01Is2CtMKYNUyKYBcn4JhrB5w", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=OJCbEude3_E"},
        ]
    },

    {
        title: "K-Dramas",
        items: [
            { img: "https://imagens.ne10.uol.com.br/veiculos/_midias/jpg/2025/04/20/597x330/1_dorama_beleza_verdadeira-34327855.jpg", top10: true, badgeColor: "red", youtube: "https://www.youtube.com/watch?v=SDP4hO0wQcI" },
            { img: "https://1.vikiplatform.com/c/36728c/825d90cadb.jpg?x=b&a=0x0", top10: true, badgeColor: "red", youtube: "https://www.youtube.com/watch?v=a_1Tf3Rhf6E" },
            { img: "https://m.media-amazon.com/images/M/MV5BYTQ2ZDAxZWYtOTY4ZS00YjcwLWEwMmQtMDkxZGMwNTdlN2U3XkEyXkFqcGc@._V1_QL75_UX310_.jpg", badge: "Romance", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=EIlTl-EMUiM" },
            { img: "https://akamai.sscdn.co/tb/letras-blog/wp-content/uploads/2025/04/1e59ab4-classe-dos-herois-fracos-1024x576.webp", badge: "Ação", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=Y1kiQzQGVEo" },
            { img: "https://is1-ssl.mzstatic.com/image/thumb/QTNlFcb1i1axZPZ-ck-cAg/1200x675.jpg", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=Bx0piV_Uf4E" },
        ]
    },
    {
        title: "Animes",
        items: [
            { img: "https://miro.medium.com/1*Rh_01wlG62Vy-5KqBp6tmA.jpeg", top10: true, badgeColor: "red", youtube: "https://www.youtube.com/watch?v=_U_57mzfjB4" },
            { img: "https://m.media-amazon.com/images/S/pv-target-images/2fac05d582494e996087fbc93b4137e8413f81c8891f5d38a58e46d36cd84966.jpg", badge: "Suspense Psicológico", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=9BxbETVKSLk" },
            { img: "https://s2-cbn.glbimg.com/crduIMUR_5no6-GsXKggvmGr060=/0x0:1920x1081/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_d975fad146a14bbfad9e763717b09688/internal_photos/bs/2026/h/h/wogv4KRjOXIwiw0AYTrw/pokemon.png", top10: true, badgeColor: "red", youtube: "https://www.youtube.com/watch?v=egDYQSUEsHg" },
            { img: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/1f3892eeb104521b62c26d41fc89b1fb.jpg", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=3FXtvLxSba4" },
            { img: "https://m.media-amazon.com/images/S/pv-target-images/4b4144f6f564c8df0f866ae266cd287a56a63c4593dc723af4a6278cfa1211e6.jpg", badgeColor: "red", youtube:"https://www.youtube.com/watch?v=359noIH-wNo" },
        ]
    },
    {
        title: "Filmes Infantis",
        items: [
            { img: "https://i.ytimg.com/vi/pWHQCruykns/maxresdefault.jpg", badge: "Clássico", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=CwXOrWvPBPk" },
            { img: "https://i.ytimg.com/vi/iWyAmob3GTg/maxresdefault.jpg", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=eY61p4FANEc" },
            { img: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019b255e-b997-7a91-b2a7-82ce43d7fa5c/compose?aspectRatio=1.78&format=webp&width=1200", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=GNyujrPGvVc" },
            { img: "https://is1-ssl.mzstatic.com/image/thumb/UH3LWagj881AjzzZD2-NSA/1200x675.jpg", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=ztb9hxl9yXA" },
            { img: "https://m.media-amazon.com/images/S/pv-target-images/1889f9638e88ab234784241b476be20aaef853e3ac4cbc57dc3762fea2e1bce4._UR1920,1080_SX624_FMjpg_.jpg", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=MnRIFXH4IcU" },
        
        ]
    }


];


// ===== FUNÇÕES UTILITÁRIAS =====
function getYouTubeId(url) {
    if (!url) return "7RUA0IOfar8";
    if (url.includes('v=')) {
        return url.split('v=')[1].split('&')[0];
    }
    return url.split('/').pop();
}

function getRandomMatchScore() {
    return Math.floor(Math.random() * 20 + 80);
}

function getRandomDuration(hasProgress) {
    return hasProgress ? '10 temporadas' : '1h ' + Math.floor(Math.random() * 59) + 'm';
}

function getRandomAgeBadge() {
    return Math.random() > 0.5 ? { text: '', class: 'green-accent' } : { text: '', class: '' };
}

// ===== FUNÇÃO PARA CRIAR CARTÃO =====
function createCard(item) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    if (item.progress) {
        card.classList.add('has-progress');
    }

    // Top 10 Badge
    if (item.top10) {
        const badge = document.createElement('div');
        badge.className = 'badge-top10';
        badge.innerHTML = '<span class="top">TOP</span><span class="number">10</span>';
        card.appendChild(badge);
    }

    const img = document.createElement('img');
    img.src = item.poster || item.img;
    img.alt = `Movie cover`;

    const iframe = document.createElement('iframe');
    iframe.frameBorder = "0";
    iframe.allow = "autoplay; encrypted-media; picture-in-picture; web-share";

    const videoId = getYouTubeId(item.youtube);
    iframe.src = `https://www.youtube.com/embed/${videoId}`;

    card.appendChild(iframe);
    card.appendChild(img);

    // Category Badge
    if (item.badge && item.badge.trim() !== '') {
        const badgeBottom = document.createElement('div');
        badgeBottom.className = `badge-bottom ${item.badgeColor || 'red'}`;
        badgeBottom.textContent = item.badge;
        card.appendChild(badgeBottom);
    }

    const ageBadge = getRandomAgeBadge();

    const details = document.createElement('div');
    details.className = 'card-details';
    details.innerHTML = `
        <div class="details-buttons">
            <div class="left-buttons">
                <button class="btn-icon btn-play-icon"><i class="fas fa-play" style="margin-left:2px;"></i></button>
                ${item.progress ? '<button class="btn-icon"><i class="fas fa-check"></i></button>' : '<button class="btn-icon"><i class="fas fa-plus"></i></button>'}
                <button class="btn-icon"><i class="fas fa-thumbs-up"></i></button>
            </div>
            <div class="right-buttons">
                <button class="btn-icon"><i class="fas fa-chevron-down"></i></button>
            </div>
        </div>
        <div class="details-info">
            <span class="match-score">${getRandomMatchScore()}% relevante</span>
            <span class="age-badge ${ageBadge.class}">${ageBadge.text}</span>
            <span class="duration">${getRandomDuration(item.progress)}</span>
            <span class="resolution">HD</span>
        </div>
        <div class="details-tags">
            <span>Empolgante</span>
            <span>Ficção</span>
        </div>
    `;
    card.appendChild(details);

    if (item.progress) {
        const pbContainer = document.createElement('div');
        pbContainer.className = 'progress-bar-container';
        const pbValue = document.createElement('div');
        pbValue.className = 'progress-value';
        pbValue.style.width = `${item.progress}%`;
        pbContainer.appendChild(pbValue);
        card.appendChild(pbContainer);
    }

    let playTimeout;
    card.addEventListener('mouseenter', () => {
        const rect = card.getBoundingClientRect();
        const windowWidth = window.innerWidth;

        if (rect.left < 100) {
            card.classList.add('origin-left');
        } else if (rect.right > windowWidth - 100) {
            card.classList.add('origin-right');
        }

        playTimeout = setTimeout(() => {
            iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&loop=1&playlist=${videoId}`;
            iframe.classList.add('playing');
            img.classList.add('playing-video');
        }, 300);
    });

    card.addEventListener('mouseleave', () => {
        clearTimeout(playTimeout);
        iframe.classList.remove('playing');
        img.classList.remove('playing-video');
        iframe.src = "";
        card.classList.remove('origin-left');
        card.classList.remove('origin-right');
    });

    return card;
}

// ===== FUNÇÃO PARA CRIAR CARROSSEL =====
function createCarousel(category) {
    const section = document.createElement('div');
    section.className = 'slider-section';

    // Header for Title and Indicators
    const header = document.createElement('div');
    header.className = 'slider-header';

    const title = document.createElement('h2');
    title.className = 'slider-title';
    title.innerText = category.title;

    const indicators = document.createElement('div');
    indicators.className = 'slider-indicators';

    header.appendChild(title);
    header.appendChild(indicators);
    section.appendChild(header);

    const row = document.createElement('div');
    row.className = 'movie-row';

    category.items.forEach(item => {
        const card = createCard(item);
        row.appendChild(card);
    });

    section.appendChild(row);
    return section;
}

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', () => {
    const nomePerfil = localStorage.getItem('perfilAtivoNome');
    const imagemPerfil = localStorage.getItem('perfilAtivoImagem');

    if (nomePerfil && imagemPerfil) {
        const kidsLink = document.querySelector('.kids-link');
        const profileIcon = document.querySelector('.profile-icon');

        if (kidsLink) kidsLink.textContent = nomePerfil;
        if (profileIcon) profileIcon.src = imagemPerfil;
    }

    const container = document.getElementById('main-content');

    if (container) {
        categories.forEach(category => {
            const carousel = createCarousel(category);
            container.appendChild(carousel);
        });
    }
});