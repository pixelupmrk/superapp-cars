import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request) {
  const data = await request.json();
  
  const novoCarro = await prisma.carro.create({
    data: {
      marca: data.marca,
      modelo: data.modelo,
      ano: parseInt(data.ano),
      preco: parseFloat(data.preco),
      lojaId: data.lojaId
    }
  });

  return NextResponse.json(novoCarro);
}
