# Configuração de Variáveis de Ambiente

## 📁 Arquivos de Ambiente

### `.env.local` (Local - Não commitado)

Este arquivo contém as credenciais reais e configurações locais.

### `.env.example` (Exemplo - Commitado)

Este arquivo serve como template para outros desenvolvedores.

## 🔐 Variáveis de Ambiente

### Credenciais de Administração

```bash
ADMIN_USERNAME=login_admin       # Usuário do administrador
ADMIN_PASSWORD=password_admin    # Senha do administrador
```

### Configurações da Aplicação

```bash
NEXT_PUBLIC_APP_NAME=Luma Padaria    # Nome da aplicação
NEXT_PUBLIC_APP_VERSION=1.0.0       # Versão da aplicação
```

## 🚀 Como Configurar

1. **Copie o arquivo de exemplo:**

   ```bash
   cp .env.example .env.local
   ```

2. **Edite as credenciais:**

   ```bash
   # Edite o arquivo .env.local com suas credenciais
   nano .env.local
   ```

3. **Reinicie o servidor:**
   ```bash
   npm run dev
   ```

## 🔒 Segurança

- ✅ `.env.local` está no `.gitignore` (não será commitado)
- ✅ Credenciais não ficam expostas no código
- ✅ Fácil de alterar sem modificar código
- ✅ Configuração por ambiente (dev, prod, etc.)

## 📝 Notas

- As variáveis `NEXT_PUBLIC_*` são expostas no cliente
- As variáveis sem prefixo são apenas do servidor
- Sempre use `.env.local` para desenvolvimento local
- Nunca commite arquivos `.env.local` com credenciais reais
