const botoes = document.querySelectorAll(".boximg");

botoes.forEach((boximg) => {
	boximg.addEventListener("mouseover", () => {
		// Aplica o efeito de redimensionamento ao botão quando o mouse passa por cima
		boximg.style.transform = "scale(1.1)"; // Aumenta o tamanho em 20%
	});

	boximg.addEventListener("mouseout", () => {
		// Remove o efeito de redimensionamento quando o mouse sai de cima do botão
		boximg.style.transform = "scale(1)"; // Retorna ao tamanho original
	});
});
