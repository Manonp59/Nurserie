<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="FONCTIONS_UTILISEES" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2defaut="" F2etat="inactif" F2lignes="" F2para=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param totalBoucles="5000000" totalAffichages="1000" epaisseurPoint="2" arrondiAuto="vrai" maxBoucle="500000" epaisseurLigne="2" nbDecimales="8"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#n" algoitem="n EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#prix" algoitem="prix EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="2#n#pasliste" algoitem="LIRE n"/>
        <item code="6#n&lt;10" algoitem="SI (n&lt;10) ALORS">
            <item code="7#debutsi" algoitem="DEBUT_SI"/>
            <item code="5#prix#n*0.5#pasliste" algoitem="prix PREND_LA_VALEUR n*0.5"/>
            <item code="8#finsi" algoitem="FIN_SI"/>
        </item>
        <item code="6#n>=10 ET n&lt;=20" algoitem="SI (n>=10 ET n&lt;=20) ALORS">
            <item code="7#debutsi" algoitem="DEBUT_SI"/>
            <item code="5#prix#n*0.4#pasliste" algoitem="prix PREND_LA_VALEUR n*0.4"/>
            <item code="8#finsi" algoitem="FIN_SI"/>
        </item>
        <item code="6#n>20" algoitem="SI (n>20) ALORS">
            <item code="7#debutsi" algoitem="DEBUT_SI"/>
            <item code="5#prix#n*0.3#pasliste" algoitem="prix PREND_LA_VALEUR n*0.3"/>
            <item code="8#finsi" algoitem="FIN_SI"/>
        </item>
        <item code="3#prix#0#pasliste" algoitem="AFFICHER prix"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
