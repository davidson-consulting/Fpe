#Feedback "Période d'essai" (Trial period)

Simple angular + php tool to get feedback from employees at the end of their trial period.

##Step

Fields for `periodeessaidb` table:
```sql
CREATE TABLE `db` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Nom` varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `Prenom` varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `Filiale` varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `BonnesImpressions` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `Idees` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `Achanger` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;
```

##Integration:

If you wish to integrate this application, don't hesitate to contact the Davidson  IT/Web team via davidson@davidson.fr
