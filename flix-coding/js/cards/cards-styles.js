export const cardsStyles = `
    <style>

      :host {
        --brand: var(--brand-colorr, #66C);
        --text: var(--text-color, #ccc);
      }

      .info-card {
        margin: 1rem;
        position: relative;
        min-height: 200px;
      }

      .info-card::after,
      .info-card::before {
        content: '';
        position: absolute;
        top: 1rem;
        right: 1rem;
        width: 18px;
        height: 29px;
        background: #aaccee;
        border-radius: 18px 18px 0 0;
        transform: rotate(-45deg);
        transform-origin: 0 100%;
        z-index: 99;
      }

      .info-card::after {
        right: calc(18px + 1rem);
        transform: rotate(45deg);
        transform-origin: 100% 100%;
      }

      .info-card.favorite::before {
        background: var(--brand);
        animation: heartbeat-right 1s ease-in-out infinite;
      }

      .info-card.favorite::after {
        background: var(--brand);
        animation: heartbeat-left 1s ease-in-out infinite;
      }

      .info-card a {
        color: var(--text);
      }

      .info-card .cover img {
        display: block;
        width: 100%;
      }

      .card-content {
        position: absolute;
        bottom: 0;
        padding: 1rem;
        background: rgba(15, 12, 41, 0.75);
      }

      .info-card .title {
        font-weight: bolder;
        font-size: 1.3rem;
        margin-bottom: 0.5rem;
      }

      .info-card .meta {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
      }

      .info-card .meta .age {
        background-color: var(--brand);
        font-size: 0.8rem;
        font-weight: bold;
        color: black;
        padding: 0.1rem;
      }

      .info-card .description {
        margin-top: 0.5rem;
      }
      @media (min-width: 768px) {
        .info-card {
          margin: 1rem 0;
          width: 45%;
          overflow: hidden;
        }
      }

      @media (min-width: 992px) {
        .info-card {
          width: 30%;
        }
      }

      @media (min-width: 1200px) {
        .info-card {
          width: calc(100% / 6 - 1rem);
        }
      }
      @media (hover: hover) {
        .card-content {
          opacity: 0;
          transition: all ease-in 0.3s;
          transform: translateY(100%);
        }

        .info-card a:hover .card-content {
          opacity: 1;
          transform: translateY(0%);
        }
      }
    </style>
  `;
