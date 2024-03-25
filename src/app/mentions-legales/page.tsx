import React from "react";
import styles from "./page.module.scss";

export default function legalMentions() {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h1 className={styles.title}>Mentions légales</h1>
        <p className={styles.description}>
          ‍ Le site{" "}
          <span className={styles.underline}>« www.malafosse-vedel.fr » </span>
          (ci-après le « Site ») est édité par MALAFOSSE-VEDEL, SARL au capital
          de 38.000 euros, dont le siège social est situé 28 rue Pharaon à
          Toulouse (31000), immatriculée au Registre du commerce et des sociétés
          et ayant pour numéro unique d’identification 851 391 953 – n°SIRET :
          85139195300037. Les Directeurs de la Publication sont Monsieur Gautier
          de Malafosse et Monsieur Clément VEDEL, associés-gérants.
          MALAFOSSE-VEDEL informe les internautes que les informations figurant
          sur le site ne constituent en rien des consultations ou des avis
          d’ordre juridique qui engagerait la responsabilité professionnelle du
          cabinet, il ne s’agit que d’informations d’ordre général qui n’ont pas
          vocation à répondre à des questions particulières. ‍ Contact :
          malafosse@malafosse-vedel.fr
        </p>
      </div>
      <div className={styles.section}>
        <h2 className={styles.title}>Hébergement Web</h2>
        <p className={styles.description}>
          Le Site est hébergé par Webflow Inc. dont le siège social est situé :
          398 11th Street, 2nd Floor San Francisco, CA 94103, États-Unis –
          téléphone: +1 415-964-0555 – adresse de courrier électronique :
          contact@webflow.com – site internet: https://webflow.com.
        </p>
      </div>
      <div className={styles.section}>
        <h2 className={styles.title}>Propriété intellectuelle</h2>
        <p className={styles.description}>
          MALAFOSSE-VEDEL est propriétaire du Site. Tous les droits afférents au
          Site sont la propriété exclusive de MALAFOSSE-VEDEL Il en est ainsi de
          l’ensemble des éléments relatifs à la réalisation du Site et à son
          animation, notamment les logiciels, le contenu du Site dont les
          lettres d’information, les textes, les images (animées ou non), les
          photographies, infographies, graphismes, icones, sons, le
          savoir-faire, marques, logos, la structure du site, l’arborescence,
          les principes de navigation, l’ergonomie, et plus généralement tous
          les éléments composant le site. Toute reproduction, représentation,
          modification, publication, transmission et/ou dénaturation, totale ou
          partielle du Site et/ou de ses composantes (y compris des marques et
          logos de MALAFOSSE-VEDEL et ceux de ses partenaires), quels que soient
          le moyen ou la forme utilisés, sans l’autorisation expresse de
          MALAFOSSE-VEDEL est interdite ; cela engagerait la responsabilité de
          son auteur et constituerait une contrefaçon, sanctionnée par les
          articles L.335-2 et suivants et L.713-2 et suivants du code de la
          propriété intellectuelle. Les articles diffusés sur le Site sont
          protégés par des droits d’auteur. Toute reproduction et/ou
          représentation, totale ou partielle, d’un ou plusieurs de ces articles
          sans l’autorisation expresse de MALAFOSSE-VEDEL est interdite et
          constitue une contrefaçon.
        </p>
      </div>
      <div className={styles.section}>
        <h2 className={styles.title}>Responsabilité</h2>
        <p className={styles.description}>
          {" "}
          Les informations consultables sur le Site le sont à titre informatif
          et ne constituent en aucune façon une offre de services.
          MALAFOSSE-VEDEL ne saurait garantir l’exactitude, l’exhaustivité ou
          l’actualité des informations diffusées sur le Site. MALAFOSSE-VEDELmet
          tout en œuvre pour offrir aux utilisateurs des informations
          disponibles et vérifiées mais ne saurait être tenu pour responsable
          des erreurs ou omissions, ainsi qu’en cas d’indisponibilité
          d’informations ou de services. L’utilisateur reconnaît en conséquence
          utiliser ces informations sous sa responsabilité exclusive.
        </p>
      </div>
      <div className={styles.section}>
        <h2 className={styles.title}>Liens hypertextes</h2>
        <p className={styles.description}>
          Le Site peut contenir des liens hypertextes renvoyant à d’autres sites
          internet. MALAFOSSE-VEDEL ne saurait être tenu pour responsable de
          l’ensemble des liens hypertextes présents sur le Site renvoyant à
          d’autres sites internet. L’existence de tels liens ne signifie pas que
          MALAFOSSE-VEDEL approuve ces sites ou qu’elle est associée à leurs
          exploitants. MALAFOSSE-VEDEL décline toute responsabilité quant au
          contenu de ces sites et quant à l’utilisation qui pourrait en être
          faite par les utilisateurs. L’utilisateur est seul responsable de
          l’utilisation de ces liens.
        </p>
      </div>
    </div>
  );
}
