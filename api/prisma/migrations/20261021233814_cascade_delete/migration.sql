-- DropForeignKey
ALTER TABLE "OrdemServico" DROP CONSTRAINT "OrdemServico_veiculoId_fkey";

-- DropForeignKey
ALTER TABLE "Veiculo" DROP CONSTRAINT "Veiculo_clienteId_fkey";

-- AddForeignKey
ALTER TABLE "Veiculo" ADD CONSTRAINT "Veiculo_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrdemServico" ADD CONSTRAINT "OrdemServico_veiculoId_fkey" FOREIGN KEY ("veiculoId") REFERENCES "Veiculo"("id") ON DELETE CASCADE ON UPDATE CASCADE;
