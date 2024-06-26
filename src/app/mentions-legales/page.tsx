import React from "react";
import styles from "./page.module.scss";

export default function legalMentions() {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h1 className={styles.title}>Mentions légales</h1>
        <p className={styles.description}>
          Le site
          <span className={styles.underline}>« www.chateau-notaires.fr »</span>
          (ci-après le « Site ») est édité par Paul-Emmanuel Chateau,
          Entrepreneur Individuel , dont le siège social est situé 5 Rue du
          Général Jean Compans, 31500 Toulouse, immatriculée au Registre du
          commerce et des sociétés et ayant pour numéro unique d’identification
          824 096 192 – n°SIRET : 82409619200037 . Le Directeurs de la
          Publication est Paul-Emmanuel Chateau. Paul-Emmanuel Chateau informe
          les internautes que les informations figurant sur le site ne
          constituent en rien des consultations ou des avis d’ordre juridique
          qui engagerait la responsabilité professionnelle du cabinet, il ne
          s’agit que d’informations d’ordre général qui n’ont pas vocation à
          répondre à des questions particulières. ‍ Contact :
          paulemmanuel.chateau@notaires.fr
        </p>
      </div>
      <div className={styles.section}>
        <h2 className={styles.title}>Hébergement Web</h2>
        <p className={styles.description}>
          Le Site est hébergé par Vercel Inc. dont le siège social est situé :
          440 N Barranca Ave Pmb 4133 Covina, CA, 91723-1722 United States
          adresse de courrier électronique : security@vercel.com. – site
          internet: https://vercel.com/.
        </p>
      </div>
      <div className={styles.section}>
        <h2 className={styles.title}>Propriété intellectuelle</h2>
        <p className={styles.description}>
          Paul-Emmanuel Chateau est propriétaire du Site. Tous les droits
          afférents au Site sont la propriété exclusive de Paul-Emmanuel Chateau
          Il en est ainsi de l’ensemble des éléments relatifs à la réalisation
          du Site et à son animation, notamment les logiciels, le contenu du
          Site dont les lettres d’information, les textes, les images (animées
          ou non), les photographies, infographies, graphismes, icones, sons, le
          savoir-faire, marques, logos, la structure du site, l’arborescence,
          les principes de navigation, l’ergonomie, et plus généralement tous
          les éléments composant le site. Toute reproduction, représentation,
          modification, publication, transmission et/ou dénaturation, totale ou
          partielle du Site et/ou de ses composantes (y compris des marques et
          logos de Paul-Emmanuel Chateau et ceux de ses partenaires), quels que
          soient le moyen ou la forme utilisés, sans l’autorisation expresse de
          Paul-Emmanuel Chateau est interdite ; cela engagerait la
          responsabilité de son auteur et constituerait une contrefaçon,
          sanctionnée par les articles L.335-2 et suivants et L.713-2 et
          suivants du code de la propriété intellectuelle. Les articles diffusés
          sur le Site sont protégés par des droits d’auteur. Toute reproduction
          et/ou représentation, totale ou partielle, d’un ou plusieurs de ces
          articles sans l’autorisation expresse de Paul-Emmanuel Chateau est
          interdite et constitue une contrefaçon.
        </p>
      </div>
      <div className={styles.section}>
        <h2 className={styles.title}>Responsabilité</h2>
        <p className={styles.description}>
          {" "}
          Les informations consultables sur le Site le sont à titre informatif
          et ne constituent en aucune façon une offre de services. Paul-Emmanuel
          Chateau ne saurait garantir l’exactitude, l’exhaustivité ou
          l’actualité des informations diffusées sur le Site. Paul-Emmanuel
          Chateau met tout en œuvre pour offrir aux utilisateurs des
          informations disponibles et vérifiées mais ne saurait être tenu pour
          responsable des erreurs ou omissions, ainsi qu’en cas
          d’indisponibilité d’informations ou de services. L’utilisateur
          reconnaît en conséquence utiliser ces informations sous sa
          responsabilité exclusive.
        </p>
      </div>
      <div className={styles.section}>
        <h2 className={styles.title}>Liens hypertextes</h2>
        <p className={styles.description}>
          Le Site peut contenir des liens hypertextes renvoyant à d’autres sites
          internet. Paul-Emmanuel Chateau ne saurait être tenu pour responsable
          de l’ensemble des liens hypertextes présents sur le Site renvoyant à
          d’autres sites internet. L’existence de tels liens ne signifie pas que
          Paul-Emmanuel Chateau approuve ces sites ou qu’elle est associée à
          leurs exploitants. Paul-Emmanuel Chateau décline toute responsabilité
          quant au contenu de ces sites et quant à l’utilisation qui pourrait en
          être faite par les utilisateurs. L’utilisateur est seul responsable de
          l’utilisation de ces liens.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.title}>Médiateur du notariat</h2>
        <p className={styles.description}>
        En cas de litige non résolu avec un notaire, vous avez la possibilité de saisir le médiateur du
notariat sur le site internet : http://mediateur-notariat.notaires.fr,
afin de tenter, avec son aide, de trouver une résolution amiable au conflit.
(ART L 616-1 et R 616-1 du code de la comsommation)
<br></br>
Vous pouvez également écrire au médiateur du notariat pour recevoir un dossier à compléter
et à renvoyer. 
<br></br>
LE MEDIATEUR DU NOTARIAT
<br></br>
60, Boulevard de la TOUR-MAUBOURG
<br></br>
75007 PARIS<br></br>

Tél : 01 44 90 30 28
<br></br>
Fax : 01 44 90 30 30
<br></br>
mediateurdunotariat@notaires.fr
        </p>
      </div>
    </div>
  );
}
