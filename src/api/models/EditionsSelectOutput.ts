import type { FlatFeatureSelectDto } from "./FlatFeatureSelectDto";
import type { EditionWithFeaturesDto } from "./EditionWithFeaturesDto";

export type EditionsSelectOutput = {
    /**
    * @type array | undefined
    */
    allFeatures?: FlatFeatureSelectDto[] | undefined;
    /**
    * @type array | undefined
    */
    editionsWithFeatures?: EditionWithFeaturesDto[] | undefined;
};
