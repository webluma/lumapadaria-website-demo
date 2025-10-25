import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    // Validar credenciais usando variáveis de ambiente do servidor
    const validUsername = process.env.ADMIN_USERNAME;
    const validPassword = process.env.ADMIN_PASSWORD;

    if (!validUsername || !validPassword) {
      return NextResponse.json(
        { error: 'Configuração de autenticação não encontrada' },
        { status: 500 }
      );
    }

    if (username === validUsername && password === validPassword) {
      // Credenciais válidas - retornar sucesso
      return NextResponse.json(
        { 
          success: true, 
          message: 'Login realizado com sucesso',
          user: username 
        },
        { status: 200 }
      );
    } else {
      // Credenciais inválidas
      return NextResponse.json(
        { error: 'Credenciais inválidas' },
        { status: 401 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
