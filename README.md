# Lara — Agente de IA para WhatsApp

Landing page comercial da Lara (assistente de IA para WhatsApp).

## Acesso local
```bash
cd "/home/leo/Documentos/Obsidian Vault/Hermes Agent/🌐 Meus Sites/lara-ia-site"
node server.js
# http://localhost:3000
```

## Estrutura
- `index.html` — landing estática
- `style.css` — visual black/gold (Orbitron)
- `server.js` — servidor zero-dep (Node)
- Tudo aponta para `https://wa.me/556293343793` com mensagem pré-preenchida

## Visual
- **Tema:** Black Gold premium (preto + dourado)
- **Fonte:** Orbitron (títulos) + Inter (texto)
- **Logo:** SVG circular com monograma L dourado + bolinha verde "online"
- **Seções:**
  1. Hero com CTA WhatsApp
  2. 6 cards (o que ela faz)
  3. Demo de conversa interativa (clica pra avançar)
  4. 6 cards "Pra qual negócio serve"
  5. CTA final

## Deploy (Render)
1. `gh repo create lara-site --public --source . --push`
2. Render → New Web Service → repo `lara-site`
3. Build vazio, Start `node server.js`, Instance Free
