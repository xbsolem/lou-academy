#!/usr/bin/env python3
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageFilter

W, H = 3840, 2160
INDIGO = (79, 70, 229)
CYAN = (6, 182, 212)
NAVY = (15, 23, 42)
SLATE = (100, 116, 139)
LINE = (226, 232, 240)
BG = (255, 255, 255)
SOFT = (248, 250, 252)

FONT = "/System/Library/Fonts/Supplemental/Arial.ttf"
FONT_B = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"

ROOT = Path("/Users/julienagranier/Desktop/LMS LOU")
SHOT = ROOT / "marketing" / "screenshots"
OUT = ROOT / "marketing" / "grand-public"


def font(size, bold=False):
    return ImageFont.truetype(FONT_B if bold else FONT, size)


def new_page():
    img = Image.new("RGB", (W, H), BG)
    return img, ImageDraw.Draw(img)


def text_w(draw, text, fnt):
    b = draw.textbbox((0, 0), text, font=fnt)
    return b[2] - b[0]


def rounded_paste(base, src, box, radius=28):
    x, y, w, h = box
    src = src.convert("RGB").resize((w, h), Image.Resampling.LANCZOS)
    mask = Image.new("L", (w, h), 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, w - 1, h - 1), radius=radius, fill=255)
    shade = Image.new("RGBA", base.size, (0, 0, 0, 0))
    sm = Image.new("L", (w, h), 0)
    ImageDraw.Draw(sm).rounded_rectangle((0, 0, w - 1, h - 1), radius=radius, fill=255)
    shade.paste((15, 23, 42, 36), (x + 12, y + 18), sm)
    composed = Image.alpha_composite(base.convert("RGBA"), shade)
    base.paste(composed.convert("RGB"))
    base.paste(src, (x, y), mask)


def footer(draw, page_no, total=6):
    draw.rectangle((0, H - 88, W, H), fill=NAVY)
    f = font(28)
    draw.text((96, H - 62), "LOU Academy", fill=(255, 255, 255), font=f)
    url = "lou-academy.vercel.app"
    draw.text((W - 96 - text_w(draw, url, f), H - 62), url, fill=(199, 210, 254), font=f)
    num = f"{page_no:02d}  /  {total:02d}"
    draw.text(((W - text_w(draw, num, f)) // 2, H - 62), num, fill=(148, 163, 184), font=f)


def page_cover():
    img, d = new_page()
    d.rectangle((0, 0, 18, H), fill=INDIGO)
    d.text((120, 180), "PLATEFORME DE FORMATION", fill=INDIGO, font=font(32, True))
    d.text((120, 320), "LOU Academy", fill=NAVY, font=font(140, True))
    d.text(
        (120, 520),
        "Concevoir, suivre et certifier des parcours\nde formation en ligne.",
        fill=SLATE,
        font=font(48),
        spacing=16,
    )
    d.rectangle((120, 720, 280, 728), fill=CYAN)
    d.text((120, 780), "Accessible depuis n’importe quel navigateur.", fill=NAVY, font=font(36))
    d.text((120, 850), "Sans installation. Disponible en continu.", fill=NAVY, font=font(36))

    login = Image.open(SHOT / "lou-academy-login-hd.png")
    rounded_paste(img, login, (1860, 240, 1800, 1640), radius=36)
    footer(d, 1)
    return img


def page_parcours():
    img, d = new_page()
    d.rectangle((0, 0, 18, H), fill=INDIGO)
    d.text((120, 140), "FONCTIONNEMENT", fill=INDIGO, font=font(28, True))
    d.text((120, 210), "Un parcours simple", fill=NAVY, font=font(84, True))
    d.text(
        (120, 330),
        "La plateforme permet de s’inscrire, de suivre des formations\net d’obtenir un certificat une fois le parcours validé.",
        fill=SLATE,
        font=font(40),
        spacing=12,
    )

    cards = [
        ("01", "Inscription", "Création d’un compte\net accès à l’espace\npersonnel."),
        ("02", "Formations", "Catalogue, leçons,\nexercices pratiques\net évaluations."),
        ("03", "Certificat", "Document PDF\ndélivré après\nvalidation du parcours."),
    ]
    x0, y0, cw, ch, gap = 120, 620, 1120, 980, 64
    for i, (num, title, body) in enumerate(cards):
        x = x0 + i * (cw + gap)
        d.rounded_rectangle((x, y0, x + cw, y0 + ch), radius=28, fill=SOFT)
        d.ellipse((x + 56, y0 + 64, x + 156, y0 + 164), fill=INDIGO)
        d.text((x + 78, y0 + 86), num[-1], fill=(255, 255, 255), font=font(48, True))
        d.text((x + 56, y0 + 220), title, fill=NAVY, font=font(52, True))
        d.text((x + 56, y0 + 320), body, fill=SLATE, font=font(36), spacing=14)
    footer(d, 2)
    return img


def page_produit():
    img, d = new_page()
    d.rectangle((0, 0, 18, H), fill=INDIGO)
    d.text((120, 120), "L’INTERFACE", fill=INDIGO, font=font(28, True))
    d.text((120, 180), "L’espace apprenant", fill=NAVY, font=font(72, True))
    shot = Image.open(SHOT / "lou-academy-player-sql-exercise.jpg")
    w, h = shot.size
    # Keep the LMS chrome, drop browser tabs and the error panel on the right.
    crop = shot.crop((0, int(h * 0.20), int(w * 0.72), int(h * 0.93)))
    rounded_paste(img, crop, (120, 340, 3600, 1600), radius=24)
    footer(d, 3)
    return img


def page_exemple():
    img, d = new_page()
    d.rectangle((0, 0, 18, H), fill=INDIGO)
    d.text((120, 140), "EXEMPLE DE PARCOURS", fill=INDIGO, font=font(28, True))
    d.text((120, 210), "SQL — formation interactive", fill=NAVY, font=font(72, True))
    d.text(
        (120, 330),
        "Les formations combinent leçons, pratique et évaluation.\nL’exemple ci-dessous illustre le format : un éditeur SQL dans le navigateur.",
        fill=SLATE,
        font=font(38),
        spacing=12,
    )

    points = [
        ("Leçons guidées", "Explications progressives, exemples et synthèses."),
        ("Pratique", "L’apprenant écrit et exécute des requêtes. La validation porte sur le résultat obtenu."),
        ("Évaluation", "Quiz et exercices pratiques, avec un seuil de réussite."),
        ("Certificat", "Document PDF remis lorsque le parcours est validé."),
    ]
    y = 620
    for i, (title, body) in enumerate(points):
        col = i % 2
        row = i // 2
        x = 120 + col * 1800
        yy = y + row * 420
        d.rounded_rectangle((x, yy, x + 1680, yy + 360), radius=24, fill=SOFT)
        d.rectangle((x + 48, yy + 56, x + 64, yy + 120), fill=CYAN)
        d.text((x + 96, yy + 56), title, fill=NAVY, font=font(44, True))
        d.text((x + 96, yy + 150), body, fill=SLATE, font=font(34))
    footer(d, 4)
    return img


def page_recruteurs():
    img, d = new_page()
    d.rectangle((0, 0, 18, H), fill=INDIGO)
    d.text((120, 140), "POUR LES RECRUTEURS", fill=INDIGO, font=font(28, True))
    d.text((120, 210), "Un produit conçu, développé\net mis en production.", fill=NAVY, font=font(72, True), spacing=10)
    d.text(
        (120, 460),
        "LOU Academy est un LMS full-stack, en ligne, utilisé comme démonstration\nde conception produit, d’architecture et de réalisation bout-en-bout.",
        fill=SLATE,
        font=font(38),
        spacing=12,
    )

    items = [
        ("Next.js 16", "Application web full-stack, interface en français."),
        ("Vercel", "Hébergement cloud, disponible sans machine locale."),
        ("Supabase", "Authentification, PostgreSQL, politiques de sécurité (RLS)."),
        ("Rôles", "Administrateur, créateur de formations, apprenant."),
        ("Studio", "Création de modules, leçons, quiz et exercices."),
        ("Isolation", "Les exercices SQL s’exécutent dans le navigateur, pas sur la base métier."),
    ]
    y = 700
    col_w = 1700
    for i, (t, b) in enumerate(items):
        col = i % 2
        row = i // 2
        x = 120 + col * (col_w + 80)
        yy = y + row * 280
        d.rounded_rectangle((x, yy, x + col_w, yy + 240), radius=20, fill=SOFT)
        d.text((x + 48, yy + 48), t, fill=NAVY, font=font(40, True))
        d.text((x + 48, yy + 120), b, fill=SLATE, font=font(32))
    footer(d, 5)
    return img


def page_acces():
    img, d = new_page()
    d.rectangle((0, 0, W, H), fill=NAVY)
    d.text((120, 280), "ACCÈS", fill=CYAN, font=font(28, True))
    d.text((120, 380), "La plateforme est en ligne.", fill=(255, 255, 255), font=font(84, True))
    # URL bar
    bar = (120, 620, 3720, 860)
    d.rounded_rectangle(bar, radius=24, fill=INDIGO)
    url = "lou-academy.vercel.app"
    uf = font(72, True)
    tw = text_w(d, url, uf)
    d.text(((W - tw) // 2, 690), url, fill=(255, 255, 255), font=uf)

    d.text(
        (120, 1020),
        "Créer un compte, choisir une formation dans le catalogue,\nsuivre le parcours, télécharger le certificat.",
        fill=(203, 213, 225),
        font=font(42),
        spacing=14,
    )
    d.text((120, 1280), "Julien Agranier", fill=(255, 255, 255), font=font(40, True))
    d.text((120, 1360), "Conception et développement — LOU Academy", fill=(148, 163, 184), font=font(32))
    d.text((120, H - 180), "France", fill=(148, 163, 184), font=font(28))
    return img


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    pages = [
        page_cover(),
        page_parcours(),
        page_produit(),
        page_exemple(),
        page_recruteurs(),
        page_acces(),
    ]
    rgb = [p.convert("RGB") for p in pages]
    pdf_proj = OUT / "LOU-Academy-presentation.pdf"
    pdf_desk = Path("/Users/julienagranier/Desktop/LOU-Academy-presentation.pdf")
    rgb[0].save(
        pdf_proj,
        save_all=True,
        append_images=rgb[1:],
        resolution=300,
        quality=95,
        optimize=True,
    )
    rgb[0].save(
        pdf_desk,
        save_all=True,
        append_images=rgb[1:],
        resolution=300,
        quality=95,
        optimize=True,
    )
    for i, p in enumerate(pages, 1):
        p.save(OUT / f"page-{i:02d}.jpg", quality=92, subsampling=0)
    print(pdf_desk, pdf_desk.stat().st_size)
    print(pdf_proj, pdf_proj.stat().st_size)


if __name__ == "__main__":
    main()
