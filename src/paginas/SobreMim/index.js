import styles from "./SobreMim.module.css"

import PostModelo from 'componentes/PostModelo'
import fotoCapa from 'assets/sobre_mim_capa.png'
import React from 'react'

export default function SobreMim() {
  const fotoSobreMim = 'https://github.com/igorfloresdev.png'
  return (
    <PostModelo
      fotoCapa={fotoCapa}
      titulo='Sobre Mim'
    >
      <h3 className={styles.subtitulo}>
        Olá eu sou o Igor !
      </h3>
      <img
        src={fotoSobreMim}
        alt="Foto do Igor Flores"
        className={styles.fotoSobreMim}
      />

      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non tortor pulvinar, vestibulum massa rhoncus, lobortis ex. Ut ac sodales ipsum, et interdum nibh. Nulla vel diam magna. In scelerisque porttitor tristique. Morbi pharetra vel arcu id consequat. Integer ac sagittis eros. Mauris efficitur lectus lectus, non rutrum orci mollis vitae. Donec venenatis auctor consequat. Proin faucibus, est non aliquet tristique, diam eros fermentum tortor, aliquet ornare arcu mauris a elit. Donec pellentesque lacus eu diam ultricies, at aliquet felis feugiat. Vivamus porta, velit sed tristique pulvinar, libero mi dignissim augue, sit amet condimentum neque elit et risus.
      </p>
      <p className={styles.paragrafo}>
        Fusce ipsum velit, consectetur id ipsum eu, iaculis rhoncus arcu. Duis dignissim rutrum iaculis. Proin placerat tempus imperdiet. Mauris ultrices leo sit amet fringilla faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum nibh id rutrum dignissim. Donec vitae dui maximus, interdum est a, viverra nisl. Donec accumsan elit sed felis mattis, facilisis ultricies purus condimentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut at eros quis arcu condimentum mattis vel vel risus. Aliquam nulla justo, vehicula sed lorem ac, posuere hendrerit risus. Integer luctus scelerisque arcu, eu tincidunt arcu euismod vitae. Ut porta felis eu purus ultricies, vitae rutrum diam euismod. Vestibulum hendrerit purus eu odio dictum pharetra.
      </p>
      <p className={styles.paragrafo}>
        Vivamus augue massa, vulputate eget tempus vitae, semper et justo. Proin non metus non risus imperdiet egestas. Proin nec nulla nisl. Cras dapibus aliquet sem nec rhoncus. Fusce sit amet scelerisque urna, sit amet viverra arcu. Morbi id est eu sem auctor blandit. Aliquam nec congue enim, eu aliquam risus. Phasellus eget odio finibus, tempor mauris sit amet, scelerisque sapien. Quisque eget arcu eget velit tristique porttitor. Duis quam augue, blandit a arcu eu, condimentum convallis odio. Vivamus dignissim, quam nec tincidunt dictum, mi libero venenatis est, quis lacinia orci arcu in nisi. Nullam et lorem sed mi ultricies rutrum in in leo. Nunc efficitur rutrum felis et imperdiet. Pellentesque at egestas nisi. Integer viverra ultricies magna, nec pretium eros. Proin sit amet lacinia felis, in posuere risus.
      </p>
      <p className={styles.paragrafo}>
        Fusce quis lacus orci. Morbi sed sapien finibus, porta tortor in, sollicitudin lectus. Praesent id felis eget felis bibendum euismod. Quisque convallis purus sed est sagittis, at pulvinar odio vestibulum. Fusce quis mi tempor, commodo lorem quis, rhoncus elit. Sed imperdiet, velit at viverra finibus, tortor eros vulputate nulla, sit amet bibendum odio mauris eget purus. Etiam eleifend ipsum vel scelerisque suscipit. Quisque sagittis sed orci consectetur tempor. Nunc nisl dolor, consectetur id porta ut, maximus vitae ligula. Aliquam cursus fringilla maximus. Ut sit amet tempus neque. Sed sit amet erat consequat, vulputate eros sed, hendrerit lorem. Sed id orci volutpat, dictum mi vitae, vestibulum lorem. Praesent id tortor vitae nulla fringilla pulvinar vel quis ante.
      </p>
      <p className={styles.paragrafo}>
        Curabitur maximus ipsum ac dolor consequat tempor. Ut posuere mi eu felis dignissim volutpat. Nam ullamcorper mollis purus a iaculis. Mauris non leo eget lectus lacinia pellentesque eget sit amet risus. Nulla accumsan blandit diam ut fringilla. Nulla eu erat eget ligula bibendum faucibus. Suspendisse ornare convallis efficitur. Mauris hendrerit sodales purus a convallis. In lacinia et ex in iaculis. Vestibulum finibus auctor ipsum sit amet sagittis.
      </p>
      <p className={styles.paragrafo}>
        Nulla at pulvinar mi, id fermentum dui. Donec imperdiet, ante a dapibus blandit, nisl arcu eleifend orci, ac mollis justo diam non urna. Morbi in accumsan libero, ut auctor nibh. Vestibulum interdum aliquet pharetra. Nulla faucibus magna purus. Donec sit amet vulputate felis. Praesent gravida nec nibh nec aliquet. Aliquam scelerisque egestas blandit. Nam leo sem, mollis eu nunc non, hendrerit finibus sapien. Quisque eleifend luctus molestie. Ut ac dui at diam facilisis rhoncus pellentesque ac turpis. Curabitur dapibus purus ut nisl consectetur congue.
      </p>
    </PostModelo>
  )
}
