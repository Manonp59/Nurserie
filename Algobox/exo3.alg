<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="TANT_QUE (x>5 ou x&lt;1) FAIRE" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2defaut="" F2etat="inactif" F2lignes="" F2para=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param totalBoucles="5000000" totalAffichages="1000" epaisseurPoint="2" arrondiAuto="vrai" maxBoucle="500000" epaisseurLigne="2" nbDecimales="8"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#x" algoitem="x EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#Saisissez un chiffre entre 1 et 5 :#1" algoitem="AFFICHER &quot;Saisissez un chiffre entre 1 et 5 :&quot;"/>
        <item code="2#x#pasliste" algoitem="LIRE x"/>
        <item code="15#x>5 ou x&lt;1" algoitem="TANT_QUE (x>5 ou x&lt;1) FAIRE">
            <item code="16#debuttantque" algoitem="DEBUT_TANT_QUE"/>
            <item code="4#Réessayez#1" algoitem="AFFICHER &quot;Réessayez&quot;"/>
            <item code="2#x#pasliste" algoitem="LIRE x"/>
            <item code="17#fintantque" algoitem="FIN_TANT_QUE"/>
        </item>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
