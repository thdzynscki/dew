BEGIN
    REAL nota1;
    REAL nota2;
    REAL media;

    # NOVO: criação de uma PROC que recebe dois REAL e retorna REAL #
    PROC calculomedianotas = (REAL n1, REAL n2) REAL: (n1 + n2) / 2;

    print(("Digite a primeira nota: "));
    read((nota1));

    print(("Digite a segunda nota: "));
    read((nota2));

    # NOVO: chamada da procedure #
    media := calculomedianotas(nota1, nota2);
    print(("Media: ", media, newline))

END