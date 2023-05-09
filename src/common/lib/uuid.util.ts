import { v5 } from 'uuid'

export class UuidUtil {
                                      
  static readonly NAMESPACE: string = 'bb5d0ffa-9a4c-4d7c-8fc2-0a7d2220ba45'

  static convertTextToUuid(
    text: string,
    namespace = this.NAMESPACE
  ) {
    console.log('uuid', v5(text, namespace))
    return v5(text, namespace)
  }
}